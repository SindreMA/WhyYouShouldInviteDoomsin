<template>
  <div id="RioRank">
    <h5>
      <div v-if="playerRank && GetWorstPlayerRank">
        This player has higher m+ score than {{Math.floor((100 - (((playerRank - 1) / GetWorstPlayerRank) * 100))*100)/100}}% of the m+ playerbase
      <q-tooltip>
        Includes all characters that have done atleast one m+
        <br>
        Amount of players: {{GetWorstPlayerRank}}
      </q-tooltip>
      </div>
      <div v-else>
        Fetching Rank
           <q-spinner-bars
          color="primary"
          size="2em"
        />
      </div>
      
    </h5>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['region', 'realm', 'player'],
  data() {
    return {
      playerRank: 0,
      GetWorstPlayerRank: null
    }
  },
  watch: {
    GetWorstPlayerRank() {
      this.GetPlayerPercent()
    }
  },
  methods: {
    GetPlayerPercent() {
      var vm = this
      axios.get("https://cors-anywhere.herokuapp.com/https://raider.io/api/v1/characters/profile?region="+vm.region+"&realm="+vm.realm+"&name="+vm.player+"&fields=mythic_plus_ranks")
        .then(function(response) {
         vm.playerRank = response.data.mythic_plus_ranks.overall.world
        })
        .catch(function(ex) {
          console.log(ex);
        });
    },
    fetchWorstPlayer() {
      var vm = this
      axios.get('https://cors-anywhere.herokuapp.com/https://raider.io/api/mythic-plus/rankings/characters?region=world&season=season-bfa-3&class=all&role=all&page=1')
        .then(function (response) {
          axios.get('https://cors-anywhere.herokuapp.com/https://raider.io/api/mythic-plus/rankings/characters?region=world&season=season-bfa-3&class=all&role=all&page=' + response.data.rankings.ui.lastPage)
            .then(function (response) {
              var items = response.data.rankings.rankedCharacters;
                vm.GetWorstPlayerRank =  items[items.length - 1].rank
            }).catch(function (error) {
              console.log(error);
            })
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  },
  computed: {

  },
  created () {
    if (!this.GetWorstPlayerRank) {
      this.fetchWorstPlayer()
    } else {
      this.GetPlayerPercent()
    }

  }
}
</script>

<style>
#RioRank {
  height: 60px;
  width: 100%;
  margin: 10px 0;
}
</style>


