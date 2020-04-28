class GalleryRow {
    constructor(id) {
        this.list = [];
        this.id = id;
    }

    getId() {
        return this.id;
    }

    push(item) {
        this.list.push(item);
    }

    empty() {
        this.list = [];
    }

    getList() {
        return this.list;
    }

    getTotal() {
        return this.list.reduce((a, b) => {
            const bb = b.width_s / b.height_s;
            return a + bb;
        }, 0);
    }

    setDimensions(dimensionsList) {
        this.list = this.list.map((item, i) => {
            return Object.assign(item, { dimension: dimensionsList[i] });
        });
    }
}

function layoutImages(images, action) {
    const MAX_WIDTH = action.width;
    let MAX_ITEMS_IN_ROW = 5;

    if(MAX_WIDTH > 800 ) {
        MAX_ITEMS_IN_ROW = 4;
    }else if( MAX_WIDTH > 600) {
        MAX_ITEMS_IN_ROW = 3;
    }else if( MAX_WIDTH > 400) {
        MAX_ITEMS_IN_ROW = 2;
    }else {
        MAX_ITEMS_IN_ROW = 2;
    }

    if(action.thumbnails) {
        MAX_ITEMS_IN_ROW = 4;
    }

    const galleryRowList = [];
    let currentRow = new GalleryRow(galleryRowList.length);
    let presentIndex = 0;

    while (presentIndex < images.length) {
        const aspectRatio = images[presentIndex].width_s / images[presentIndex].height_s;
        if ((currentRow.getTotal() + aspectRatio) >= MAX_ITEMS_IN_ROW) {
            currentRow.setDimensions(getDimensionsForRow(currentRow, MAX_WIDTH));
            galleryRowList.push(currentRow);
            currentRow = new GalleryRow(galleryRowList.length);
        }
        currentRow.push(images[presentIndex])
        if(action.thumbnails && galleryRowList.length >= 2) {
            return galleryRowList;
        }
        presentIndex++;
    }
    if(!action.thumbnails && currentRow.getList().length < 3 ) {
        currentRow.setDimensions(getDimensionsForRow(currentRow, MAX_WIDTH, true));
        galleryRowList.push(currentRow);
    } else {
        currentRow.setDimensions(getDimensionsForRow(currentRow, MAX_WIDTH, false));
        galleryRowList.push(currentRow);
    }
    return galleryRowList;
}

function getDimensionsForRow(row, max_width, is_last = false) {
    const widthDiffRatio = is_last ? 2 : 5 / row.getTotal();
    const dimensions = [];
    let totalLength = 0;

    row.getList().forEach((item) => {
        const aspectRatio = item.width_s / item.height_s;
        const height = (widthDiffRatio) * 150;
        const width = (widthDiffRatio) * aspectRatio * 150;
        totalLength += width;
        
        dimensions.push({ height, width , s_text: item.width_l + "x" + item.height_l});
    });
    const rowToWindowRatio = is_last ? 1 : max_width / totalLength;
    return dimensions.map((item) => {
        return {
            height: item.height * rowToWindowRatio,
            width: item.width * rowToWindowRatio,
            s_text: item.s_text
        };
    })
}

module.exports  = {
    layoutImages
}