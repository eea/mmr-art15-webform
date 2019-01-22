var formTemplate = {
  gi: {
    label: 'General information',
    tables: {
      table_1: [
        {
          name: 'GI_mc',
          type: 'select',
          label: 'EU Member State / EEA member country',
          required: true,
          options: [
          {value: 'AT', text: 'AT'},
          {value: 'BE', text: 'BE'},
          {value: 'BG', text: 'BG'},
          {value: 'CH', text: 'CH'},
          {value: 'CY', text: 'CY'},
          {value: 'CZ', text: 'CZ'},
          {value: 'DE', text: 'DE'},
          {value: 'DK', text: 'DK'},
          {value: 'EE', text: 'EE'},
          {value: 'ES', text: 'ES'},
          {value: 'FI', text: 'FI'},
          {value: 'FR', text: 'FR'},
          {value: 'GB', text: 'GB'},
          {value: 'GR', text: 'GR'},
          {value: 'HR', text: 'HR'},
          {value: 'HU', text: 'HU'},
          {value: 'IE', text: 'IE'},
          {value: 'IS', text: 'IS'},
          {value: 'IT', text: 'IT'},
          {value: 'LI', text: 'LI'},
          {value: 'LT', text: 'LT'},
          {value: 'LU', text: 'LU'},
          {value: 'LV', text: 'LV'},
          {value: 'MT', text: 'MT'},
          {value: 'NL', text: 'NL'},
          {value: 'NO', text: 'NO'},
          {value: 'PL', text: 'PL'},
          {value: 'PT', text: 'PT'},
          {value: 'RO', text: 'RO'},
          {value: 'SE', text: 'SE'},
          {value: 'SI', text: 'SI'},
          {value: 'SK', text: 'SK'},
          {value: 'TR', text: 'TR'}
          ],
          selected: '',
        },
        {
          name: 'GI_Rep',
          type: 'textarea',
          label: 'Reporter',
          selected: '',
          rows: 1, 
          maxlength: 10,
          required: true,
        }
      ],
    }
  },
  plf: {
    label: 'Policy and legal framework',
    tables: {
      table_1: [
        {
          name: 'Intro_pol',
          type: 'textarea',
          label: 'Introduction',
          selected: '',
          rows: 10, 
          maxlength: 1000
        },
        {
          name: 'NAS',
          type: 'textarea',
          label: 'Adaptation Strategies and Plans',
          rows: 12, 
          maxlength: 6000
        },
        {
          name: 'IMeans',
          type: 'textarea',
          label: 'Implementation means',
          rows: 12, 
          maxlength: 3000
        },
        {
          name: 'MRE',
          type: 'textarea',
          label: 'Monitoring, reporting and evaluation',
          rows: 11, 
          maxlength: 1500
        },
        {
          name: 'Review',
          type: 'textarea',
          label: 'Schedule and planned review/revision',
          selected: '',
          rows: 10, 
          maxlength: 1000
        }
      ],
    }
  },
  psaa: {
    label: 'Priority sectors and adaptation action',
    tables: {
      table_1: [
        {
          name: 'Intro_sect',
          type: 'textarea',
          label: 'Introduction',
          rows: 10, 
          maxlength: 1000
        },
        {
          name: 'Sectors',
          type: 'textarea',
          label: 'Sectors addressed in NAS/NAP',
          rows: 25, 
          maxlength: 8000
        },
        {
          name: 'Mainstreaming',
          type: 'textarea',
          label: 'Mainstreaming of adaptation',
          rows: 12, 
          maxlength: 3000
        }
      ],
    }
  },
  ivai: {
    label: 'Assessments: Impact, vulnerability and adaptation information',
    tables: {
      table_1: [
        {
          name: 'Intro_ass',
          type: 'textarea',
          label: 'Introduction',
          rows: 12, 
          maxlength: 1000
        },
        {
          name: 'Obs_proj',
          type: 'textarea',
          label: 'Observations and Projections',
          rows: 12, 
          maxlength: 5000
        },
        {
          name: 'IVA',
          type: 'textarea',
          label: 'Impact and Vulnerability Assessment',
          rows: 12, 
          maxlength: 5000
        },
        {
          name: 'Research',
          type: 'textarea',
          label: 'Research',
          rows: 12, 
          maxlength: 3000
        },
        {
          name: 'Mon',
          type: 'textarea',
          label: 'Monitoring progress',
          rows: 12, 
          maxlength: 2000
        }
      ],
    }
  },
  espcb: {
    label: 'Engaging Stakeholders: participation and capacity building',
    tables: {
      table_1: [
        {
          name: 'Intro_stake',
          type: 'textarea',
          label: 'Introduction',
          rows: 12, 
          maxlength: 1000
        },
        {
          name: 'Governance',
          type: 'textarea',
          label: 'Governance',
          rows: 12, 
          maxlength: 5000
        },
        {
          name: 'Knowledge',
          type: 'textarea',
          label: 'Knowledge',
          rows: 12, 
          maxlength: 5000
        },
        {
          name: 'International',
          type: 'textarea',
          label: 'International dimensions',
          rows: 12, 
          maxlength: 2000
        }
      ],
    }
  },
  con: {
    label: 'Contact',
    tables: {
      table_1: [
        {
          name: 'Org',
          type: 'textarea',
          label: 'Organisation',
          selected: '',
          required: true,
          rows: 1, 
          maxlength: 150
        },
        {
          name: 'contact',
          type: 'textarea',
          label: 'Contact description',
          selected: '',
          rows: 1, 
          maxlength: 100
        },
        {
          name: 'Ent',
          type: 'textarea',
          label: 'Entity within the organisation',
          selected: '',
          rows: 1, 
          maxlength: 150
        },
        {
          name: 'Name',
          type: 'textarea',
          label: 'Name of contact point',
          selected: '',
          rows: 1, 
          maxlength: 100
        },
        {
          name: 'Title',
          type: 'textarea',
          label: 'Title or function of contact point',
          selected: '',
          rows: 1, 
          maxlength: 150
        },
        {
          name: 'email',
          type: 'email',
          label: 'E-mail address',
          selected: '',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone number',
          selected: '',
        },
        {
          name: 'website',
          type: 'url',
          label: 'Website',
          selected: '',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Postal address',
          selected: '',
          rows: 3, 
          maxlength: 300
        }
      ],
    }
  },
  nas: {
    label: 'National adaptation strategy',
    data: {
      table_label: 'National adaptation strategy',
      articles: [{
        article_title: {
          label: 'NAS Name',
          type: 'textarea',
          selected: '',
          name: 'NAS_Caption',
          rows: 2, 
          maxlength: 200
        },
        article_items: [{
          label: 'Year of adoption',
          description: '',
          selected: '',
          type: 'date',
          name: 'NAS_Year',
          selected: '',
        },{
          label: 'Status',
          type: 'select',
          name: 'NAS_Status',
          options: [
          {value: 'Being_developed', text: 'Being developed'},
          {value: 'Adopted', text: 'Adopted'}
          ],
          selected: '',
        },{
          label: 'NAS Web link',
          type: 'url',
          name: 'NAS_Link',
          selected: '',
        }]
      }]
    }
  },
  nap: {
    label: 'National adaptation plan',
    data: {
      table_label: 'National adaptation plan',
      articles: [{
        article_title: {
          label: 'NAP Name',
          type: 'textarea',
          name: 'NAP_Caption',
          selected: '',
          rows: 2, 
          maxlength: 200
        },
        article_items: [{
          label: 'Year of adoption',
          description: '',
          type: 'date',
          name: 'NAP_Year',
          selected: '',
        },{
          label: 'Status',
          type: 'select',
          name: 'NAP_Status',
          options: [
          {value: 'Being_developed', text: 'Being developed'},
          {value: 'Adopted', text: 'Adopted'}
          ],
          selected: '',
        },{
          label: 'NAP Web link',
          type: 'url',
          name: 'NAP_Link',
          selected: '',
        }]
      }]
    }
  },
  iva: {
    label: 'Impacts, vulnerability and adaptation assessments',
    data: {
      table_label: 'Impacts, vulnerability and adaptation assessments',
      articles: [{
        article_title: {
          label: 'IVA Name',
          type: 'textarea',
          name: 'IVA_Caption',
          selected: '',
          rows: 2, 
          maxlength: 200
        },
        article_items: [{
          label: 'Year of publication',
          type: 'date',
          name: 'IVA_Year',
          selected: '',
        },{
          label: 'Status',
          type: 'select',
          name: 'IVA_Status',
          options: [
            {value: 'Not_yet_planned', text: 'Not yet planned'},
            {value: 'Being_developed', text: 'Being developed'},
            {value: 'Ongoing_in_research_programmes', text: 'Ongoing in research programmes'},
            {value: 'Completed', text: 'Completed'}
          ],
          selected: '',
        },{
          label: 'IVA assessment in NAS',
          name: 'IVA_NAS',
          type: 'select',
          options: [
            {value: 'yes', text: 'yes'},
            {value: 'no', text: 'no'}
          ],
          selected: '',  
        },{
          label: 'IVA Web link',
          type: 'url',
          name: 'IVA_Link',
        },{
          label: 'IVA Assessment',
          name: 'IVA_Ass',
          type: 'selectmulti',
          options: [
            {value: 'Impact', text: 'Impact'},
            {value: 'Vulnerability', text: 'Vulnerability'},
            {value: 'Adaptation', text: 'Adaptation'}
          ],
          selected: [''],
        }]
      }]
    }
  },
  rpr: {
    label: 'Research Programmes',
    data: {
      table_label: 'Research Programmes',
      articles: [{
        article_title: {
          label: 'Research programme name',
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
          selected: '',
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
      }]
    }
  },
  met: {
    label: 'Meteorological observations',
    data: {
      table_label: 'Meteorological observations',
      articles: [{
        article_title: {
          label: 'Met Office Name',
          type: 'textarea',
          name: 'MET_Caption',
          selected: '',
          rows: 2, 
          maxlength: 200
        },
        article_items: [{
          label: 'Met Office Status',
          name: 'MET_Status',
          type: 'select',
          options: [
            {value: 'Being_developed', text: 'Being developed'},
            {value: 'Established', text: 'Established'}
          ],
          selected: '',
        },{
          label: 'Met Office Web link',
          type: 'url',
          name: 'MET_Link',
          selected: '',
        }]
      }]
    }
  },
  cps: {
    label: 'Climate Projections and Services',
    data: {
      table_label: 'Climate Projections and Services',
      articles: [{
        article_title: {
          label: 'Climate Projections and Services Name',
          tooltip: 'tooltip Climate Projections and Services Name',
          type: 'textarea',
          name: 'CPS_Caption',
          rows: 2, 
          maxlength: 200
        },
        article_items: [{
          label: 'Climate Projections and services Status',
          name: 'CPS_Status',
          type: 'select',
          options: [
            {value: 'Being_developed', text: 'Being developed'},
            {value: 'Established', text: 'Established'}
          ],
          selected: '',
        },{
          label: 'Climate Projections and Services Web link',
          type: 'url',
          name: 'CPS_Link',
        }]
      }]
    }
  },
  wpp: {
    label: 'CC IVA portals and platforms',
    data: {
      table_label: 'CC IVA portals and platforms',
      articles: [{
        article_title: {
          label: 'CC IVA portals and platforms Name',
          type: 'textarea',
          name: 'WPP_Caption',
          selected: '',
          rows: 2, 
          maxlength: 200
        },
        article_items: [{
          label: 'CC IVA portals and platforms Status',
          name: 'WPP_Status',
          type: 'select',
          options: [
            {value: 'Being_developed', text: 'Being developed'},
            {value: 'Established', text: 'Established'}
          ],
          selected: '',
        },{
          label: 'CC IVA portals and platforms Web link',
          type: 'url',
          name: 'WPP_Link',
          selected: '',
        }]
      }]
    }
  },
  mim: {
    label: 'Monitoring, indicators, methodologies',
    data: {
      table_label: 'Monitoring, indicators, methodologies',
      articles: [{
        article_title: {
          label: 'Monitoring, indicators, methodologies Name',
          type: 'textarea',
          name: 'MIM_Caption',
          selected: '',
          rows: 2, 
          maxlength: 200
        },
        article_items: [{
          label: 'Monitoring, indicators, methodologies Status',
          name: 'MIM_Status',
          type: 'select',
          options: [
            {value: 'Being_developed', text: 'Being developed'},
            {value: 'Ongoing_in_research_programmes', text: 'Ongoing in research programmes'},
            {value: 'Established', text: 'Established'}
          ],
          selected: '',
        },{
          label: 'Monitoring, indicators, methodologies Web link',
          type: 'url',
          name: 'MIM_Link',
          selected: '',
        }]
      }]
    }
  }
}

export default formTemplate
