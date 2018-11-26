<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">MMR article 15</h1></center>
    <center><h5><small class="text-muted">Questionnaire on national adaptation actions</small></h5></center>
      <b-card no-body>
        <b-form novalidate validated  @submit="onSubmit">
          <b-tabs pills card v-if="prefilled"><!--v-if="prefilled" -->
            <b-tab :title="doTitle(form.gi.label)">
              <generictab tabId="0" :info.sync="form.gi" active></generictab>
            </b-tab>
            <b-tab title='Summary'>
                <genericarraytab tabId="1" path="nas.data.articles[0]" :info.sync="form.nas"></genericarraytab>
                <br><genericarraytab tabId="2" path="nap.data.articles[0]" :info.sync="form.nap"></genericarraytab>
                <br><genericarraytab tabId="3" path="iva.data.articles[0]" :info.sync="form.iva"></genericarraytab>
                <br><genericarraytab tabId="4" path="rpr.data.articles[0]" :info.sync="form.rpr"></genericarraytab>
                <br><genericarraytab tabId="5" path="met.data.articles[0]" :info.sync="form.met"></genericarraytab>
                <br><genericarraytab tabId="6" path="cps.data.articles[0]" :info.sync="form.cps"></genericarraytab>
                <br><genericarraytab tabId="7" path="wpp.data.articles[0]" :info.sync="form.wpp"></genericarraytab>
                <br><genericarraytab tabId="8" path="mim.data.articles[0]" :info.sync="form.mim"></genericarraytab>
            </b-tab>
            <!--<b-tab :title="doTitle(form.nas.label)" >
              <genericarraytab tabId="1" path="nas.data.articles[0]" :info.sync="form.nas"></genericarraytab>
            </b-tab>
            <b-tab :title="doTitle(form.nap.label)" >
              <genericarraytab tabId="2" path="nap.data.articles[0]" :info.sync="form.nap"></genericarraytab>
            </b-tab>
            <b-tab :title="doTitle(form.iva.label)" >
              <genericarraytab tabId="3" path="iva.data.articles[0]" :info.sync="form.iva"></genericarraytab>
            </b-tab>
            <b-tab :title="doTitle(form.rpr.label)" >
              <genericarraytab tabId="4" path="rpr.data.articles[0]" :info.sync="form.rpr"></genericarraytab>
            </b-tab>
            <b-tab :title="doTitle(form.met.label)" >
              <genericarraytab tabId="5" path="met.data.articles[0]" :info.sync="form.met"></genericarraytab>
            </b-tab>
            <b-tab :title="doTitle(form.cps.label)" >
              <genericarraytab tabId="6" path="cps.data.articles[0]" :info.sync="form.cps"></genericarraytab>
            </b-tab>
            <b-tab :title="doTitle(form.wpp.label)" >
              <genericarraytab tabId="7" path="wpp.data.articles[0]" :info.sync="form.wpp"></genericarraytab>
            </b-tab>
            <b-tab :title="doTitle(form.mim.label)" >
              <genericarraytab tabId="8" path="mim.data.articles[0]" :info.sync="form.mim"></genericarraytab>
            </b-tab>-->
            <b-tab :title="doTitle(form.plf.label)">
              <generictab tabId="9" :info.sync="form.plf" active></generictab>
            </b-tab>
            <b-tab :title="doTitle(form.psaa.label)">
              <generictab tabId="10" :info.sync="form.psaa" active></generictab>
            </b-tab>
            <b-tab :title="doTitle(form.ivai.label)">
              <generictab tabId="11" :info.sync="form.ivai" active></generictab>
            </b-tab>
            <b-tab :title="doTitle(form.espcb.label)">
              <generictab tabId="12" :info.sync="form.espcb" active></generictab>
            </b-tab>
            <b-tab :title="doTitle(form.con.label)">
              <generictab tabId="13" :info.sync="form.con" active></generictab>
            </b-tab>
          </b-tabs>
        </b-form>
   			<formsubmit  :country.sync="country" :info.sync="form"></formsubmit>
  
      </b-card>
      <div v-if="!prefilled" class="spinner">
        <div class="loader"></div>
      </div>
    </b-container>
</template>

<script>

import {getInstance, getCountry} from '../api.js';
import FormSubmit from './FormSubmit.vue'

import Generictab from './generic.vue'
import GenericArraytab from './genericArray.vue'

import form from '../assets/form.js'
import formTemplate from '../assets/formTemplate.js'
import _ from 'lodash';

export default {

  name: 'Webform',
  components: {
    formsubmit: FormSubmit,
    generictab: Generictab,
    genericarraytab: GenericArraytab
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      button_text: 'Hide list',
      prefilled: false,
      country: '',
    }
  },

  created() {
    this.form = form;
      getInstance().then((response) => {
        let instance_data = response.data
        getCountry().then((response) => {
            this.country = response.data
            this.prefill(instance_data)
          })
      })
  },

  methods: {

    normalizeArray (obj, propertyName) {
      var propertyValue = obj[propertyName];
      if (_.isArray(propertyValue)) {
          return;
      }        
      if (_.isUndefined(propertyValue) || propertyValue === null) {
          obj[propertyName] = [];
          return;
      }
      var arrayValue = [];
      arrayValue.push(propertyValue);
      obj[propertyName] = arrayValue;
    },

    prefill(data) {
      console.log('data');
      console.log(data);
      this.form.gi.tables.table_1[0].selected = data.MMR_ART_15.GI_mc;
      this.form.gi.tables.table_1[1].selected = data.MMR_ART_15.GI_Rep;
      
      this.form.plf.tables.table_1[0].selected = data.MMR_ART_15.plf.Intro_pol;
      this.form.plf.tables.table_1[1].selected = data.MMR_ART_15.plf.NAS;
      this.form.plf.tables.table_1[2].selected = data.MMR_ART_15.plf.IMeans;
      this.form.plf.tables.table_1[3].selected = data.MMR_ART_15.plf.MRE;
      this.form.plf.tables.table_1[4].selected = data.MMR_ART_15.plf.Review;

      this.form.plf.tables.table_1[0].selected = data.MMR_ART_15.plf.Intro_pol;
      this.form.plf.tables.table_1[1].selected = data.MMR_ART_15.plf.NAS;
      this.form.plf.tables.table_1[2].selected = data.MMR_ART_15.plf.IMeans;
      this.form.plf.tables.table_1[3].selected = data.MMR_ART_15.plf.MRE;
      this.form.plf.tables.table_1[4].selected = data.MMR_ART_15.plf.Review;

      this.form.psaa.tables.table_1[0].selected = data.MMR_ART_15.psaa.Intro_sect;
      this.form.psaa.tables.table_1[1].selected = data.MMR_ART_15.psaa.Sectors;
      this.form.psaa.tables.table_1[2].selected = data.MMR_ART_15.psaa.Mainstreaming;

      this.form.ivai.tables.table_1[0].selected = data.MMR_ART_15.ivai.Intro_ass;
      this.form.ivai.tables.table_1[1].selected = data.MMR_ART_15.ivai.Obs_proj;
      this.form.ivai.tables.table_1[2].selected = data.MMR_ART_15.ivai.IVA;
      this.form.ivai.tables.table_1[3].selected = data.MMR_ART_15.ivai.Research;
      this.form.ivai.tables.table_1[4].selected = data.MMR_ART_15.ivai.Mon;

      this.form.espcb.tables.table_1[0].selected = data.MMR_ART_15.espcb.Intro_stake;
      this.form.espcb.tables.table_1[1].selected = data.MMR_ART_15.espcb.Governance;
      this.form.espcb.tables.table_1[2].selected = data.MMR_ART_15.espcb.Knowledge;
      this.form.espcb.tables.table_1[3].selected = data.MMR_ART_15.espcb.International;

      this.form.con.tables.table_1[0].selected = data.MMR_ART_15.con.Org;
      this.form.con.tables.table_1[1].selected = data.MMR_ART_15.con.contact;
      this.form.con.tables.table_1[2].selected = data.MMR_ART_15.con.Ent;
      this.form.con.tables.table_1[3].selected = data.MMR_ART_15.con.Name;
      this.form.con.tables.table_1[4].selected = data.MMR_ART_15.con.Title;
      this.form.con.tables.table_1[5].selected = data.MMR_ART_15.con.email;
      this.form.con.tables.table_1[6].selected = data.MMR_ART_15.con.phone;
      this.form.con.tables.table_1[7].selected = data.MMR_ART_15.con.website;
      this.form.con.tables.table_1[8].selected = data.MMR_ART_15.con.address;

      //nas
      this.form.nas.data.articles = [];
      if (_.get(data, 'MMR_ART_15.nas')) {
        this.normalizeArray(data.MMR_ART_15,"nas");
        _.get(data, 'MMR_ART_15.nas').forEach(element => {
          let myObj = _.cloneDeep(_.get(formTemplate, 'nas.data.articles[0]'), false);
          myObj.article_title.selected = element.NAS_Caption;
          myObj.article_items[0].selected = element.NAS_Year;
          myObj.article_items[1].selected = element.NAS_Status;
          myObj.article_items[2].selected = element.NAS_Link;
          this.form.nas.data.articles.push(myObj);
        });
      }

      //nap
      this.form.nap.data.articles = [];
      if (_.get(data, 'MMR_ART_15.nap')) {
        this.normalizeArray(data.MMR_ART_15,"nap");
        _.get(data, 'MMR_ART_15.nap').forEach(element => {
          let myObj = _.cloneDeep(_.get(formTemplate, 'nap.data.articles[0]'), false);
          myObj.article_title.selected = element.NAP_Caption;
          myObj.article_items[0].selected = element.NAP_Year;
          myObj.article_items[1].selected = element.NAP_Status;
          myObj.article_items[2].selected = element.NAP_Link;
          this.form.nap.data.articles.push(myObj);
        });
      }

      //iva
      this.form.iva.data.articles = [];
      if (_.get(data, 'MMR_ART_15.iva')) {
        this.normalizeArray(data.MMR_ART_15,"iva");
        _.get(data, 'MMR_ART_15.iva').forEach(element => {
          let myObj = _.cloneDeep(_.get(formTemplate, 'iva.data.articles[0]'), false);
          myObj.article_title.selected = element.IVA_Caption;
          myObj.article_items[0].selected = element.IVA_Year;
          myObj.article_items[1].selected = element.IVA_Status;
          myObj.article_items[2].selected = element.IVA_NAS;
          myObj.article_items[3].selected = element.IVA_Link;
          myObj.article_items[4].selected = element.IVA_Ass;
          console.log('iva myObj');
          console.log(myObj);
          this.form.iva.data.articles.push(myObj);
        });
      }

      //rpr
      this.form.rpr.data.articles = [];
      if (_.get(data, 'MMR_ART_15.rpr')) {
        this.normalizeArray(data.MMR_ART_15,"rpr");
        _.get(data, 'MMR_ART_15.rpr').forEach(element => {
          let myObj = _.cloneDeep(_.get(formTemplate, 'rpr.data.articles[0]'), false);
          myObj.article_title.selected = element.PRP_Caption;
          myObj.article_items[0].selected = element.RPR_Status;
          myObj.article_items[1].selected = element.RPR_Start;
          myObj.article_items[2].selected = element.RPR_End;
          myObj.article_items[3].selected = element.RPR_Link;
          console.log('rpr myObj');
          console.log(myObj);
          this.form.rpr.data.articles.push(myObj);
        });
      }

      //met
      this.form.met.data.articles = [];
      if (_.get(data, 'MMR_ART_15.met')) {
        this.normalizeArray(data.MMR_ART_15,"met");
        _.get(data, 'MMR_ART_15.met').forEach(element => {
          let myObj = _.cloneDeep(_.get(formTemplate, 'met.data.articles[0]'), false);
          myObj.article_title.selected = element.MET_Caption;
          myObj.article_items[0].selected = element.MET_Status;
          myObj.article_items[1].selected = element.MET_Link;
          this.form.met.data.articles.push(myObj);
        });
      }

      //cps
      this.form.cps.data.articles = [];
      if (_.get(data, 'MMR_ART_15.cps')) {
        this.normalizeArray(data.MMR_ART_15,"cps");
        _.get(data, 'MMR_ART_15.cps').forEach(element => {
          let myObj = _.cloneDeep(_.get(formTemplate, 'cps.data.articles[0]'), false);
          myObj.article_title.selected = element.CPS_Caption;
          myObj.article_items[0].selected = element.CPS_Status;
          myObj.article_items[1].selected = element.CPS_Link;
          this.form.cps.data.articles.push(myObj);
        });
      }

      //wpp
      this.form.wpp.data.articles = [];
      if (_.get(data, 'MMR_ART_15.wpp')) {
        this.normalizeArray(data.MMR_ART_15,"wpp");
        _.get(data, 'MMR_ART_15.wpp').forEach(element => {
          let myObj = _.cloneDeep(_.get(formTemplate, 'wpp.data.articles[0]'), false);
          myObj.article_title.selected = element.WPP_Caption;
          myObj.article_items[0].selected = element.WPP_Status;
          myObj.article_items[1].selected = element.WPP_Link;
          this.form.wpp.data.articles.push(myObj);
        });
      }
      
      //mim
      this.form.mim.data.articles = [];
      if (_.get(data, 'MMR_ART_15.mim')) {
        this.normalizeArray(data.MMR_ART_15,"mim");
        _.get(data, 'MMR_ART_15.mim').forEach(element => {
          let myObj = _.cloneDeep(_.get(formTemplate, 'mim.data.articles[0]'), false);
          myObj.article_title.selected = element.MIM_Caption;
          myObj.article_items[0].selected = element.MIM_Status;
          myObj.article_items[1].selected = element.MIM_Link;
          this.form.mim.data.articles.push(myObj);
        });
      }

      this.prefilled = true;
    },


    doTitle(title) {
      return title.split(":")[0]
    },

    onSubmit (evt) {
       evt.preventDefault();
    },

  },

}
</script>


<style lang="css" scoped>
.subtitle {
  max-width: 488px;margin: auto;display: block;
}

.container {
  max-width: 1600px;
}

.spinner {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
   border-top: 16px solid blue;
   border-right: 16px solid green;
   border-bottom: 16px solid red;
   border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
