<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 15px;
    }
  </style>
  <body>
  <h2>MMR Art 15</h2>
    
    <h2>General Information</h2>
    <table  style="width:100%">
      <tr >
        <th>Member country</th>
        <th>Reporter</th>
      </tr>
      <xsl:for-each select="MMR_ART_15">
      <tr>
        <td><xsl:value-of select="GI_mc"/></td>
        <td><xsl:value-of select="GI_Rep"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Policy and legal framework</h2>
    <table>
      <tr >
        <th>Introduction</th>
        <th>Adaptation Strategies</th>
        <th>Implementation means</th>
        <th>Monitoring, reporting and evaluation</th>
        <th>Schedule and planned review/revision</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/plf">
      <tr>
        <td><xsl:value-of select="Intro_pol"/></td>
        <td><xsl:value-of select="NAS"/></td>
        <td><xsl:value-of select="IMeans"/></td>
        <td><xsl:value-of select="MRE"/></td>
        <td><xsl:value-of select="Review"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Priority sectors and adaptation action</h2>
    <table>
      <tr >
        <th>Introduction</th>
        <th>Sectors addressed in NAS/NAP</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/psaa">
      <tr>
        <td><xsl:value-of select="Intro_sect"/></td>
        <td><xsl:value-of select="Sectors"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Assessments: Impact, vulnerability and adaptation information</h2>
    <table>
      <tr >
        <th>Introduction</th>
        <th>Observations and Projections</th>
        <th>Impact and Vulnerability Assessment</th>
        <th>Research</th>
        <th>Monitoring progress</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/ivai">
      <tr>
        <td><xsl:value-of select="Intro_ass"/></td>
        <td><xsl:value-of select="Obs_proj"/></td>
        <td><xsl:value-of select="IVA"/></td>
        <td><xsl:value-of select="Research"/></td>
        <td><xsl:value-of select="Mon"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Engaging Stakeholders: participation and capacity building</h2>
    <table>
      <tr >
        <th>Introduction</th>
        <th>Governance</th>
        <th>Knowledge</th>
        <th>International dimensions</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/espcb">
      <tr>
        <td><xsl:value-of select="Intro_stake"/></td>
        <td><xsl:value-of select="Governance"/></td>
        <td><xsl:value-of select="Knowledge"/></td>
        <td><xsl:value-of select="International"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Contact</h2>
    <table>
      <tr >
        <th>Organisation</th>
        <th>Contact description</th>
        <th>Entity within the organisation</th>
        <th>Name of contact point</th>
        <th>Title or function of contact point</th>
        <th>E-mail address</th>
        <th>Phone number</th>
        <th>Website</th>
        <th>Postal address</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/con">
      <tr>
        <td><xsl:value-of select="Org"/></td>
        <td><xsl:value-of select="contact"/></td>
        <td><xsl:value-of select="Ent"/></td>
        <td><xsl:value-of select="Name"/></td>
        <td><xsl:value-of select="Title"/></td>
        <td><xsl:value-of select="email"/></td>
        <td><xsl:value-of select="phone"/></td>
        <td><xsl:value-of select="website"/></td>
        <td><xsl:value-of select="address"/></td>
      </tr>
      </xsl:for-each>
    </table>

<h2>Summary</h2>
<br/>

    <h2>National adaptation strategy</h2>
    <table>
      <tr >
        <th>Nas Name</th>
        <th>Year of adoption</th>
        <th>Status</th>
        <th>NAS Web link</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/nas">
      <tr>
        <td><xsl:value-of select="NAS_Caption"/></td>
        <td><xsl:value-of select="NAS_Year"/></td>
        <td><xsl:value-of select="NAS_Status"/></td>
        <td><xsl:value-of select="NAS_Link"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>National adaptation plan</h2>
    <table>
      <tr >
        <th>Nap Name</th>
        <th>Start Year</th>
        <th>Status</th>
        <th>NAP Web link</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/nap">
      <tr>
        <td><xsl:value-of select="NAP_Caption"/></td>
        <td><xsl:value-of select="NAP_Year"/></td>
        <td><xsl:value-of select="NAP_Status"/></td>
        <td><xsl:value-of select="NAP_Link"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Impacts, vulnerability and adaptation assessments</h2>
    <table>
      <tr >
        <th>IVA Name</th>
        <th>Year of publication</th>
        <th>Status</th>
        <th>IVA assessment in NAS</th>
        <th>IVA Web link</th>
        <th>IVA Assessment</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/iva">
      <tr>
        <td><xsl:value-of select="IVA_Caption"/></td>
        <td><xsl:value-of select="IVA_Year"/></td>
        <td><xsl:value-of select="IVA_Status"/></td>
        <td><xsl:value-of select="IVA_NAS"/></td>
        <td><xsl:value-of select="IVA_Link"/></td>
        <td><xsl:value-of select="IVA_Ass"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Research Programmes</h2>
    <table>
      <tr >
        <th>Research Programmes</th>
        <th>Research Programme Status</th>
        <th>From (year)</th>
        <th>Until (year)</th>
        <th>Research Programme Web link</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/rpr">
      <tr>
        <td><xsl:value-of select="PRP_Caption"/></td>
        <td><xsl:value-of select="RPR_Status"/></td>
        <td><xsl:value-of select="RPR_Start"/></td>
        <td><xsl:value-of select="RPR_End"/></td>
        <td><xsl:value-of select="RPR_Link"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Meteorological observations</h2>
    <table>
      <tr >
        <th>Met Office Name</th>
        <th>Met Office Status</th>
        <th>Met Office Web link</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/met">
      <tr>
        <td><xsl:value-of select="MET_Caption"/></td>
        <td><xsl:value-of select="MET_Status"/></td>
        <td><xsl:value-of select="MET_Link"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>Climate Projections and Services</h2>
    <table>
      <tr >
        <th>Climate Projections and Services Name</th>
        <th>Climate Projections and services Status</th>
        <th>Climate Projections and Services Web link</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/cps">
      <tr>
        <td><xsl:value-of select="CPS_Caption"/></td>
        <td><xsl:value-of select="CPS_Status"/></td>
        <td><xsl:value-of select="CPS_Link"/></td>
      </tr>
      </xsl:for-each>
    </table>

    <h2>CC IVA portals and platforms</h2>
    <table>
      <tr >
        <th>CC IVA portals and platforms Name</th>
        <th>CC IVA portals and platforms Status</th>
        <th>CC IVA portals and platforms Web link</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/wpp">
      <tr>
        <td><xsl:value-of select="WPP_Caption"/></td>
        <td><xsl:value-of select="WPP_Status"/></td>
        <td><xsl:value-of select="WPP_Link"/></td>
      </tr>
      </xsl:for-each>
    </table>


    <h2>Monitoring, indicators, methodologies</h2>
    <table>
      <tr >
        <th>Monitoring, indicators, methodologies Name</th>
        <th>Monitoring, indicators, methodologies Status</th>
        <th>Monitoring, indicators, methodologies Web link</th>
      </tr>
      <xsl:for-each select="MMR_ART_15/mim">
      <tr>
        <td><xsl:value-of select="MIM_Caption"/></td>
        <td><xsl:value-of select="MIM_Status"/></td>
        <td><xsl:value-of select="MIM_Link"/></td>
      </tr>
      </xsl:for-each>
    </table>

  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
