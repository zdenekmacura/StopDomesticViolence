<?xml version="1.0" ?>
<?xml-stylesheet type="text/css" href="vytky.css"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	
	<xsl:template match="TextView">
		<div class="TextView"><xsl:value-of select="@text"/></div>
	</xsl:template>

	<xsl:template match="CheckBox">
        <xsl:element name="input">
            <xsl:attribute name="id"><xsl:value-of select="@id" /></xsl:attribute>
            <xsl:attribute name="type">checkbox</xsl:attribute>
        </xsl:element>
        <span>
			<xsl:value-of select="@text"/>
		</span>

    </xsl:template>

   	<xsl:template match="MultiAutoCompleteTextView">
   		<xsl:element name="div">
            <xsl:attribute name="class">InputField</xsl:attribute>
        <xsl:element name="input">
            <xsl:attribute name="id"><xsl:value-of select="@id" /></xsl:attribute>
            <xsl:attribute name="type">text</xsl:attribute>
        </xsl:element>
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">InputFieldSelect</xsl:attribute>
        </xsl:element>
    </xsl:template>
		
	<xsl:template match="LinearLayout">
		<div class="LinearLayout">
		<xsl:apply-templates/>
		</div>
	</xsl:template>
	
	<xsl:template match="ScrollView">
    <html>
    <head>
     <link href="vytky.css" type="text/css" rel="stylesheet"/>
     <script src="js/jquery.min.js"></script>
     <script src="js/vytky.js"></script>
    </head>
     <body class="ScrollView">
      <xsl:apply-templates/>
      <xsl:element name="div">
            <xsl:attribute name="id">content</xsl:attribute>
      </xsl:element>
     </body>
    </html>
   </xsl:template>
	
</xsl:stylesheet>