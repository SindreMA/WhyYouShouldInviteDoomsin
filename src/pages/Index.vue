<template>
  <q-page class="flex flex-center">
    <br>
    <div v-if="AllRuns && details" class="flex justify-around defaultFont">
      <q-img class="profileImg" src="https://render-eu.worldofwarcraft.com/character/silvermoon/77/141071949-main.jpg" />
      <div class="infoContainer">
        <h1>Why you should invite Doomsin?</h1>
        <p>BFA M+ runs completed: <strong>{{AllRuns.length}}</strong></p>
        <p>Spent over <strong>{{ Math.round(totalTime / 1000 /60 / 60)}}</strong> hours  in mythic+</p>
        <p>BFA M+ score: <strong>{{Math.round(characters.filter(x=> {return x.player == 'doomsin'})[0].data.score*10)/10}}</strong></p>
        <p>BFA Raid Progress: <strong>{{getProgress}}</strong></p>
        <rioRank :region="'eu'" :realm="'silvermoon'" :player="'Doomsin'"/>
        <p>This player is also the creator of the website <a href="https://Bestkeystone.com/#/">BestKeystone.com</a></p>
<br><br>
<a href="https://bestkeystone.com/#/lookup?characters=eu.silvermoon.Doomsin">Click here to show details</a>
    
      </div>
    </div>
    <div v-else>
<q-spinner-bars
          color="primary"
          size="20em"
        />
    </div>
    
  </q-page>
</template>


<script>
import axios from 'axios'
import rioRank from '../components/RioRank'
export default {
  name: 'PageIndex',
   data () {
    return {
      details: null,
      totalTime: 0,
      AllRuns: [],
      characters: [
        {region: 'eu', realm: 'grim-batol', player: 'ipfeely'},
        {region: 'eu', realm: 'grim-batol', player: 'guildfirst'},
        {region: 'eu', realm: 'grim-batol', player: 'sindrema'},
        {region: 'eu', realm: 'grim-batol', player: 'skiltpadde'},
        {region: 'eu', realm: 'grim-batol', player: 'nu'},
        {region: 'eu', realm: 'silvermoon', player: 'doomsin'},
        {region: 'eu', realm: 'silvermoon', player: 'goodfriend'},
        {region: 'eu', realm: 'silvermoon', player: 'adamsdpssuck'},
      ]
    }
  },
  methods: {

  },
  components: {
rioRank
  },
  computed: {
        getProgress() {
      if (this.details) {
        console.log();
        
        var raidItem = this.details.progression.raids[this.details.progression.raids.length - 1]  
        var m = 0
        var h = 0
        var n = 0
if (raidItem) {
  raidItem.bosses.forEach(boss => {
        if (boss.heroicKills != 0) {
          h++;
        }  
        if (boss.normalKills != 0) {
          n++;
        }  
        if (boss.mythicKills != 0) {
          m++;
        }  
        });
        if (m != 0) {
          return `${m}/${raidItem.bosses.length}M`
        }
        if (h != 0) {
          return `${h}/${raidItem.bosses.length}HC`
        }
        if (n != 0) {
          return `${n}/${raidItem.bosses.length}NM`
        }
}
        
      }
      
    }
  },
  created() {
    var vm = this
    this.characters.forEach(char => {
      axios.get(`https://api2.bestkeystone.com/api/Player/search?character=${char.player}`).then(x=> {
        var re = x.data.filter(x=> {return x.name.toLowerCase() == char.player && x.realm == char.realm && x.region == char.region})
        if (re.length != 0) {
          var playerID = re[0].id
          axios.get(`https://api2.bestkeystone.com/api/Player?id=${playerID}&region=${char.region}`).then(c=> {
            char.data = c.data;
            c.data.runs.forEach(element => {
              vm.AllRuns.push(element)
              vm.totalTime += element.clear_time
            });
          }).catch(x=> {
            console.log(x);
          })
        }
      }).catch(x=> {
        console.log(x);
        
      })
    });
    axios.get(`https://api2.bestkeystone.com/api/Player/Details?character=Doomsin&realm=silvermoon&region=eu`).then(x=> {
      vm.details = x.data
    }).catch(x=> 
    console.log(x));
    
  },
}
</script>

<style scoped>
.profileImg {
  width: 400px;
  height: 800px;
  border-radius: 50%;
  border: 1px grey solid;
}
.infoContainer {
  padding: 60px;
}
p {
  font-size: 20px;
}
</style>
