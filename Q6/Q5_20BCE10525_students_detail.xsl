<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <html>
        <body>
        <h2>Student Details</h2>
        <table border="1">
        <tr bgcolor="#9acd32">
        <th>First Name</th>
        <th>Last Name</th>
        <th>reg</th>
        <th>phone</th>
        </tr>
        <xsl:for-each select="catalog/cd">
        <xsl:sort/>
        <tr>
        <td>
        <xsl:value-of select="fname"/>
        </td>
        <td>
        <xsl:value-of select="lname"/>
        </td>
        <td>
        <xsl:value-of select="reg"/>
        </td>
        <td>
        <xsl:value-of select="phone"/>
        </td>
        </tr>
        </xsl:for-each>
        </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>