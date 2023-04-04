<template>
  <div name="info">
    <h1 class="compHeading1">{{$t('message.comp1')}}</h1>
    <p class="paragraph">{{$t('message.info1')}}</p>
    <b-table striped responsive dark :items="items" :fields="fields" :tbody-tr-class='rowClass' :thead-tr-class='color'>
    </b-table>
  </div>
</template>

<script>
import { i18n } from'../i18n'
var int=i18n;
  export default {
    name: "info",
    data() {
      return {
        color:'headClass',
        fields: [
          {key: 'one',
          label:int.t('message.info1-1')},
          {key: 'two',
          label:int.t('message.info1-2')}
        ],
        items: [
          { one: int.t('message.info1-1-1'),
          two: int.t('message.info1-2-1')},
          { one:int.t('message.info1-3'),
           two:int.t('message.info1-4'),status:'awesome'},
          { one:int.t('message.info1-3-1'),
           two:int.t('message.info1-4-1') },           
        ],
      }
    },
      methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.status === 'awesome') return ('example')
      },

      forceRerender() {
      //console.log("forceRerender");
      // update items
      this.updateItems();
       // l = currLanguage
    },

    updateItems() {

      // Updates Text and Links
      let Names = [int.t('message.info1-1'), int.t('message.info1-2')];
      let Cells=[int.t('message.info1-1-1'),int.t('message.info1-3'),int.t('message.info1-3-1')];
      let CellsTwo=[int.t('message.info1-2-1'),int.t('message.info1-4'),int.t('message.info1-4-1')];
      let i =0;
      let j=0;
      let k=0;
      Names.forEach(n => {
        // console.log(i);
        // console.log(pan);
        this.fields[i].label =n;
        i++;
      });
        Cells.forEach(c => {
        // console.log(i);
        // console.log(pan);
        this.items[j].one=c
        j++;
      });
        CellsTwo.forEach(ct => {
        // console.log(i);
        // console.log(pan);
        this.items[k].two=ct
        k++;
      });
    }
    }
  }
</script>
