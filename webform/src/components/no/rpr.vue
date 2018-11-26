<template>
  <div v-if="info">
  <div class="question-wrapper">
  <div class="answer" style="position: relative;">
        <div class="table-head">
          <b>{{info.data.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                   {{article.article_title.label}} : {{article.article_title.selected}}
                  <span style="float:right">▼</span>
                </h5>
              <br>
              
              <b-btn variant="danger" @click="removeItem(index)"> X</b-btn>
                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-fields">
                    <b-form-input required v-if="article.article_title.type != 'select' && article.article_title.type!='textarea'" :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>
                    <b-form-select required v-else-if="article.article_title.type !='textarea'" :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected" :options="article.article_title.options"></b-form-select>
                    <b-form-textarea required v-else-if="article.article_title.type === 'textarea'" :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :name="article.article_title.name" :rows="article.article_title.rows" :max-rows="article.article_title.maxrows" :maxlength="article.article_title.maxlength" :type="article.article_title.type" v-model="article.article_title.selected"></b-form-textarea>
                    <div class="form-subsection" v-for="(item,item_index) in article.article_items">
                          <div class="mt-2">{{item.label}}  <small v-if="item.description" class="muted">({{item.description}})</small></div> 
                            <!-- {{field}} -->
                          <b-form-input required v-if="item.type != 'select' && item.type!='textarea'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>

                          <b-form-select required v-else-if="item.type !='textarea'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :name="item.name" v-model="item.selected" :options="item.options"></b-form-select>

                          <b-form-textarea required v-else-if="item.type === 'textarea'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :name="item.name" :rows="item.rows" :max-rows="item.maxrows" :maxlength="item.maxlength" :type="item.type" v-model="item.selected"></b-form-textarea> 
                     </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="
                  position: absolute;
                  top: 9px;
                  right: 13px;"
                  variant="primary" @click="addItem"> + Add</b-btn>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';

export default {

  name: 'Inventory',

  props: {
    info: null,
    tabId:null

  },

  created(){
    if(this.info.data.articles.length > 0){
    } else {
      this.addItem()
    }
  },


  data () {
    return {
    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

  addItem(){
    let inventory = {
        article_title: {
          label: 'RPR Caption',
          type: 'textarea',
          name: 'PRP_Caption',
          selected: '',
          rows: 2, 
          maxlength: 200
        },
        article_items: [{
          label: 'Research Programme Status',
          name: 'RPR_Status',
          type: 'select',
          options: [
            {value: 'Currently_being_undertaken', text: 'Currently being undertaken'},
            {value: 'Completed', text: 'Completed'}
          ],
          selected: 'Currently_being_undertaken',
        },{
          label: 'From (year)',
          type: 'date',
          name: 'RPR_Start',
          selected: '',
        },{
          label: 'Until (year)',
          type: 'date',
          name: 'RPR_End',
          selected: '',
        },{
          label: 'Research Programme Web link',
          type: 'url',
          name: 'RPR_Link',
          selected: '',
        }]
      }
      this.info.data.articles.push(inventory)
      /*console.log('this.info.data.articles');
      this.info.data.articles.forEach(function(element) {
        console.log(element);
      });*/
    },

    removeItem(index) {
      this.info.data.articles.splice(index, 1)
    },
  },
}
</script>

<style lang="scss" scoped>

.btn-danger {
      position: absolute;
    top: 1rem;
    right: 3rem;
}

.questions .row {
  padding-bottom: 1.5rem;
  padding-top:1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
      margin-left: 0;
    margin-right: 0;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  &:first-of-type{
  padding-top:2rem;
  }
}
</style>