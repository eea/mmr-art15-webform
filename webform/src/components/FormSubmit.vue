<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: -100px;
    right: 5px;" @click="doStuff">Save</b-btn>
    <b-btn variant="danger" style="position: absolute;
    top: -100px;
    right: 75px;" @click="exitForm">CDR</b-btn>
    <b-alert :show="dismissCountDown"
       variant="success"
       @dismissed="dismissCountDown=0"
       @dismiss-count-down="countDownChanged">
        <h3 style="color: black; font-weight: bold;">The report is saved</h3>
      </b-alert>
  </div>
</template>

<script>

import {saveInstance, envelope} from '../api.js';
import formTemplate from '../assets/formTemplate.js'
import emptyInstance from '../assets/emptyInstance.js'
import _ from 'lodash';

export default {

  name: 'FormSubmit',


  props: {
    info: null,
    country: null,
  },

  updated() {
  },

  created() {
    this.dataset = this.info
    this.validate()
  },

  data () {
    return {
      dataset: null,
      validation: [],
      jsonemptyinstance: {
          "MMR_ART_15": {
              "@xmlns": "http://eionet.europa.eu/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "http://dd.eionet.europa.eu/namespaces/4 http://dd.eionet.europa.eu/schemas/mmr-national-adaptation-actions/mmr-art15.xsd",
              "GI_mc": null,
              "GI_Rep": null,
              "plf": {
                "Intro_pol": null,
                "NAS": null,
                "IMeans": null,
                "MRE": null,
                "Review": null
              },
              "psaa": {
                "Intro_sect": null,
                "Sectors": null,
                "Mainstreaming": null
              },
              "ivai": {
                "Intro_ass": [],
                "Obs_proj": null,
                "IVA": null,
                "Research": null,
                "Mon": null
              },
              "espcb": {
                "Intro_stake": null,
                "Governance": null,
                "Knowledge": null,
                "International": null
              },
              "con": {
                "Org": null,
                "contact": null,
                "Ent": null,
                "Name": null,
                "Title": null,
                "email": null,
                "phone": null,
                "website": null,
                "address": null
              },
              "nas": [],
              "nap": [],
              "iva": [],
              "rpr": [],
              "met": [],
              "cps": [],
              "wpp": [],
              "mim": []
          }
      },
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  },

  methods: {
    exitForm(){
      window.location.replace(envelope)
    },

         showAlert () {
      console.log('showingalert')
      this.dismissCountDown = this.dismissSecs
    },

       countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    doStuff(){
      this.jsonemptyinstance = _.cloneDeep(emptyInstance, false);
        
      this.jsonemptyinstance.MMR_ART_15.GI_mc = this.dataset.gi.tables.table_1[0].selected;
      this.jsonemptyinstance.MMR_ART_15.GI_Rep = this.dataset.gi.tables.table_1[1].selected;

      this.jsonemptyinstance.MMR_ART_15.plf.Intro_pol = this.dataset.plf.tables.table_1[0].selected;
      this.jsonemptyinstance.MMR_ART_15.plf.NAS = this.dataset.plf.tables.table_1[1].selected;
      this.jsonemptyinstance.MMR_ART_15.plf.IMeans = this.dataset.plf.tables.table_1[2].selected;
      this.jsonemptyinstance.MMR_ART_15.plf.MRE = this.dataset.plf.tables.table_1[3].selected;
      this.jsonemptyinstance.MMR_ART_15.plf.Review = this.dataset.plf.tables.table_1[4].selected;

      this.jsonemptyinstance.MMR_ART_15.psaa.Intro_sect = this.dataset.psaa.tables.table_1[0].selected;
      this.jsonemptyinstance.MMR_ART_15.psaa.Sectors = this.dataset.psaa.tables.table_1[1].selected;
      this.jsonemptyinstance.MMR_ART_15.psaa.Mainstreaming = this.dataset.psaa.tables.table_1[2].selected;

      this.jsonemptyinstance.MMR_ART_15.ivai.Intro_ass = this.dataset.ivai.tables.table_1[0].selected;
      this.jsonemptyinstance.MMR_ART_15.ivai.Obs_proj = this.dataset.ivai.tables.table_1[1].selected;
      this.jsonemptyinstance.MMR_ART_15.ivai.IVA = this.dataset.ivai.tables.table_1[2].selected;
      this.jsonemptyinstance.MMR_ART_15.ivai.Research = this.dataset.ivai.tables.table_1[3].selected;
      this.jsonemptyinstance.MMR_ART_15.ivai.Mon = this.dataset.ivai.tables.table_1[4].selected;

      this.jsonemptyinstance.MMR_ART_15.espcb.Intro_stake = this.dataset.espcb.tables.table_1[0].selected;
      this.jsonemptyinstance.MMR_ART_15.espcb.Governance = this.dataset.espcb.tables.table_1[1].selected;
      this.jsonemptyinstance.MMR_ART_15.espcb.Knowledge = this.dataset.espcb.tables.table_1[2].selected;
      this.jsonemptyinstance.MMR_ART_15.espcb.International = this.dataset.espcb.tables.table_1[3].selected;

      this.jsonemptyinstance.MMR_ART_15.con.Org = this.dataset.con.tables.table_1[0].selected;
      this.jsonemptyinstance.MMR_ART_15.con.contact = this.dataset.con.tables.table_1[1].selected;
      this.jsonemptyinstance.MMR_ART_15.con.Ent = this.dataset.con.tables.table_1[2].selected;
      this.jsonemptyinstance.MMR_ART_15.con.Name = this.dataset.con.tables.table_1[3].selected;
      this.jsonemptyinstance.MMR_ART_15.con.Title = this.dataset.con.tables.table_1[4].selected;
      this.jsonemptyinstance.MMR_ART_15.con.email = this.dataset.con.tables.table_1[5].selected;
      this.jsonemptyinstance.MMR_ART_15.con.phone = this.dataset.con.tables.table_1[6].selected;
      this.jsonemptyinstance.MMR_ART_15.con.website = this.dataset.con.tables.table_1[7].selected;
      this.jsonemptyinstance.MMR_ART_15.con.address = this.dataset.con.tables.table_1[8].selected;

      console.log('this.dataset.nas.data.articles');
      console.log(this.dataset.nas.data.articles);
      this.jsonemptyinstance.MMR_ART_15.nas = [];


      this.dataset.nas.data.articles.forEach(element => {
        let myObj = {};
        myObj.NAS_Caption = element.article_title.selected;
        myObj.NAS_Year = element.article_items[0].selected;
        myObj.NAS_Status = element.article_items[1].selected;
        myObj.NAS_Link = element.article_items[2].selected;
        this.jsonemptyinstance.MMR_ART_15.nas.push(myObj);
      });

      console.log('this.jsonemptyinstance.MMR_ART_15.nas');
      console.log(this.jsonemptyinstance.MMR_ART_15.nas);

      this.jsonemptyinstance.MMR_ART_15.nap = [];
      this.dataset.nap.data.articles.forEach(element => {
        let myObj = {};
        myObj.NAP_Caption = element.article_title.selected;
        myObj.NAP_Year = element.article_items[0].selected;
        myObj.NAP_Status = element.article_items[1].selected;
        myObj.NAP_Link = element.article_items[2].selected;
        this.jsonemptyinstance.MMR_ART_15.nap.push(myObj);
      });

      console.log('this.jsonemptyinstance.MMR_ART_15.nap');
      console.log(this.jsonemptyinstance.MMR_ART_15.nap);

      this.jsonemptyinstance.MMR_ART_15.iva = [];
      console.log('element');
      this.dataset.iva.data.articles.forEach(element => {
        let myObj = {};
        
        console.log(element);
        myObj.IVA_Caption = element.article_title.selected;
        myObj.IVA_Year = element.article_items[0].selected;
        myObj.IVA_Status = element.article_items[1].selected;
        myObj.IVA_NAS = element.article_items[2].selected;
        myObj.IVA_Link = element.article_items[3].selected;
        myObj.IVA_Ass = element.article_items[4].selected;
        this.jsonemptyinstance.MMR_ART_15.iva.push(myObj);
      });

      console.log('this.jsonemptyinstance.MMR_ART_15.iva');
      console.log(this.jsonemptyinstance.MMR_ART_15.iva);

      this.jsonemptyinstance.MMR_ART_15.rpr = [];
      this.dataset.rpr.data.articles.forEach(element => {
        let myObj = {};
        myObj.PRP_Caption = element.article_title.selected;
        myObj.RPR_Status = element.article_items[0].selected;
        myObj.RPR_Start = element.article_items[1].selected;
        myObj.RPR_End = element.article_items[2].selected;
        myObj.RPR_Link = element.article_items[3].selected;
        this.jsonemptyinstance.MMR_ART_15.rpr.push(myObj);
      });

      console.log('this.jsonemptyinstance.MMR_ART_15.rpr');
      console.log(this.jsonemptyinstance.MMR_ART_15.rpr);

      this.jsonemptyinstance.MMR_ART_15.met = [];
      this.dataset.met.data.articles.forEach(element => {
        let myObj = {};
        myObj.MET_Caption = element.article_title.selected;
        myObj.MET_Status = element.article_items[0].selected;
        myObj.MET_Link = element.article_items[1].selected;
        this.jsonemptyinstance.MMR_ART_15.met.push(myObj);
      });

      console.log('this.jsonemptyinstance.MMR_ART_15.met');
      console.log(this.jsonemptyinstance.MMR_ART_15.met);

      this.jsonemptyinstance.MMR_ART_15.cps = [];
      this.dataset.cps.data.articles.forEach(element => {
        let myObj = {};
        myObj.CPS_Caption = element.article_title.selected;
        myObj.CPS_Status = element.article_items[0].selected;
        myObj.CPS_Link = element.article_items[1].selected;
        this.jsonemptyinstance.MMR_ART_15.cps.push(myObj);
      });

      console.log('this.jsonemptyinstance.MMR_ART_15.cps');
      console.log(this.jsonemptyinstance.MMR_ART_15.cps);

      this.jsonemptyinstance.MMR_ART_15.wpp = [];
      this.dataset.wpp.data.articles.forEach(element => {
        let myObj = {};
        myObj.WPP_Caption = element.article_title.selected;
        myObj.WPP_Status = element.article_items[0].selected;
        myObj.WPP_Link = element.article_items[1].selected;
        this.jsonemptyinstance.MMR_ART_15.wpp.push(myObj);
      });

      console.log('this.jsonemptyinstance.MMR_ART_15.wpp');
      console.log(this.jsonemptyinstance.MMR_ART_15.wpp);

      this.jsonemptyinstance.MMR_ART_15.mim = [];
      this.dataset.mim.data.articles.forEach(element => {
        let myObj = {};
        myObj.MIM_Caption = element.article_title.selected;
        myObj.MIM_Status = element.article_items[0].selected;
        myObj.MIM_Link = element.article_items[1].selected;
        this.jsonemptyinstance.MMR_ART_15.mim.push(myObj);
      });

      console.log('this.jsonemptyinstance.MMR_ART_15.mim');
      console.log(this.jsonemptyinstance.MMR_ART_15.mim);

      saveInstance(this.jsonemptyinstance)
      this.showAlert();

    },
    validate() {
    }
  },
    watch: {
    info: {
      handler: function(old_val,new_val) {
        this.validate()
      },
      deep: true,
      immediate: true,
    }
  }
}
</script>

<style lang="css" scoped>

.alert.alert-success {
  position: fixed;
  top:3rem;
  left: 20%;
  right: 20%;
}
</style>
