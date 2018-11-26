<template>
  <div v-if="info">
      <div class="question-wrapper">

        <div class="question">
        </div>
        <div v-for="(tables,index) in info.tables" class="table table-striped answer">
          <div class="table-head">
            <p>{{info.label}}</p>
          </div>
          <div style="padding: 1rem" class="table-body">
            <b-row style="margin-bottom:5px" v-for="table in tables">
              <b-col style="text-align: left; " lg="12">
                <label style="cursor: pointer;" :for="table.name">
                  {{table.label}}
                </label>
                <b-form-input v-b-tooltip.hover.html="tipMethod" v-if="table.type != 'select' && table.type!='textarea'" :state="table.required" :id="table.name" :type="table.type" v-model="table.selected"></b-form-input>
                <b-form-select v-b-tooltip.hover.html="tipMethod" v-else-if="table.type !='textarea'" :state="table.required" :id="table.name" :type="table.type" v-model="table.selected" :options="table.options"></b-form-select>
                <b-form-textarea v-b-tooltip.hover.html="tipMethod" v-else-if="table.type === 'textarea'" :id="table.name" :rows="table.rows" :max-rows="table.maxrows" :maxlength="table.maxlength" :type="table.type" v-model="table.selected"></b-form-textarea>
                
              </b-col>
            </b-row>

          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {

  props: {
    info: null,
    tabId:null
  },

  data () {
    return {
    }
  },

  methods: {
    tipMethod () {
      //return 'table.name'
    }
  }
}
</script>

<style lang="css" scoped>
.table-body {
  display: block;
    background: #fafafa;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>