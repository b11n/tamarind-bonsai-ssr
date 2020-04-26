
<template>
  <div>
      <b-container>
          <b-row>
              <b-col sm="12" md="6">
                  <div>
                      <h1>Adenium Bonsai</h1>
                      <table>
                          <tr>
                              <td>Scientific name</td>
                              <td>Adenium obesum </td>
                          </tr>
                          <tr>
                              <td>Native to </td>
                              <td>Africa, Desert climate</td>
                          </tr>
                          <tr>
                              <td>Care </td>
                              <td>Medium care recommended</td>
                          </tr>
                      </table>
                  </div>
              </b-col>
            <b-col sm="12" md="6">
                  <div >
                      <img class="hero-image" src="https://live.staticflickr.com/65535/49801709243_7b5820a53e_h.jpg" />
                  </div>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import { BContainer, BLink, BRow, BCol } from 'bootstrap-vue'
export default {
  components: {
    BContainer,
    BLink,
    BRow,
    BCol,
  },
  head: function() {
    return {
      title:
        'Bonsai Varities | Tamarind Bonsai Kottayam - Browse and buy Bonsai plants , tools and resources in Kottayam , Kerala'
    }
  }
}
</script>

<style scoped>
 .hero-image {
     max-height: 512px;
 }
</style>