(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LVL\" type=\"INT\" size=\"22\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"ROOT_MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsFavorite", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LVL\" type=\"INT\" size=\"22\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MOBILE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsRecent", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LVL\" type=\"INT\" size=\"22\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MOBILE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsDevMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LVL\" type=\"INT\" size=\"22\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"ROOT_MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_ID\">0000</Col><Col id=\"MENU_NM\">Guide</Col><Col id=\"PARENT_MENU_ID\">0</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">1000</Col><Col id=\"MENU_NM\">개발가이드</Col><Col id=\"PARENT_MENU_ID\">0000</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NM\">그리드 기능</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">comp::Functions.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1011</Col><Col id=\"MENU_NM\">페이징</Col><Col id=\"MENU_URL\">comp::Paging.xfdl</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_NM\">사용자 컴포넌트</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">comp::ExtComponent.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1030</Col><Col id=\"MENU_NM\">팝업</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">comp::Popup.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1040</Col><Col id=\"MENU_NM\">메시지</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">comp::Message.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1050</Col><Col id=\"MENU_NM\">엑셀 import/export</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">comp::ExcelFormula.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1060</Col><Col id=\"MENU_NM\">파일업다운로드</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">comp::FileUpDown.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1061</Col><Col id=\"MENU_NM\">정합성 체크</Col><Col id=\"MENU_URL\">comp::Validate.xfdl</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1070</Col><Col id=\"MENU_NM\">etc</Col><Col id=\"MENU_URL\">comp::Etc.xfdl</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_NM\">컴포넌트가이드</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">3000</Col><Col id=\"PARENT_MENU_ID\">0</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NM\">guide01</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compGuide/guide01.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NM\">guide02</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compGuide/guide02.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3030</Col><Col id=\"MENU_NM\">guide03</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compGuide/guide03.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3040</Col><Col id=\"MENU_NM\">guide04</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compGuide/guide04.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3050</Col><Col id=\"MENU_NM\">guide05</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compGuide/guide05.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3060</Col><Col id=\"MENU_NM\">guide06</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compGuide/guide06.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3070</Col><Col id=\"MENU_NM\">guide07</Col><Col id=\"MENU_URL\">design::compGuide/guide07.xfdl</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3080</Col><Col id=\"MENU_NM\">guide08</Col><Col id=\"MENU_URL\">design::compGuide/guide08.xfdl</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">3090</Col><Col id=\"MENU_NM\">etc</Col><Col id=\"MENU_URL\">design::compGuide/guide09.xfdl</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">2000</Col><Col id=\"MENU_NM\">화면유형 템플릿</Col><Col id=\"PARENT_MENU_ID\">0</Col><Col id=\"ROOT_MENU_ID\">0000</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2010</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_NM\">Template01</Col><Col id=\"MENU_URL\">design::compTemplate/Template01.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NM\">Template02</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template02.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2030</Col><Col id=\"MENU_NM\">Template03</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template03.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2040</Col><Col id=\"MENU_NM\">Template04</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template04.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2050</Col><Col id=\"MENU_NM\">Template05</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template05.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2060</Col><Col id=\"MENU_NM\">Template06</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template06.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2070</Col><Col id=\"MENU_NM\">Template07</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template07.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2080</Col><Col id=\"MENU_NM\">Template08</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template08.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2090</Col><Col id=\"MENU_NM\">Template09</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template09.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">2100</Col><Col id=\"MENU_NM\">Template10</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"ROOT_MENU_ID\">0000</Col><Col id=\"MENU_URL\">design::compTemplate/Template10-1.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1900</Col><Col id=\"DATA\">1900</Col></Row><Row><Col id=\"CODE\">1901</Col><Col id=\"DATA\">1901</Col></Row><Row><Col id=\"CODE\">1902</Col><Col id=\"DATA\">1902</Col></Row><Row><Col id=\"CODE\">1903</Col><Col id=\"DATA\">1903</Col></Row><Row><Col id=\"CODE\">1904</Col><Col id=\"DATA\">1904</Col></Row><Row><Col id=\"CODE\">1905</Col><Col id=\"DATA\">1905</Col></Row><Row><Col id=\"CODE\">1906</Col><Col id=\"DATA\">1906</Col></Row><Row><Col id=\"CODE\">1907</Col><Col id=\"DATA\">1907</Col></Row><Row><Col id=\"CODE\">1908</Col><Col id=\"DATA\">1908</Col></Row><Row><Col id=\"CODE\">1909</Col><Col id=\"DATA\">1909</Col></Row><Row><Col id=\"CODE\">1910</Col><Col id=\"DATA\">1910</Col></Row><Row><Col id=\"CODE\">1911</Col><Col id=\"DATA\">1911</Col></Row><Row><Col id=\"CODE\">1912</Col><Col id=\"DATA\">1912</Col></Row><Row><Col id=\"CODE\">1913</Col><Col id=\"DATA\">1913</Col></Row><Row><Col id=\"CODE\">1914</Col><Col id=\"DATA\">1914</Col></Row><Row><Col id=\"CODE\">1915</Col><Col id=\"DATA\">1915</Col></Row><Row><Col id=\"CODE\">1916</Col><Col id=\"DATA\">1916</Col></Row><Row><Col id=\"CODE\">1917</Col><Col id=\"DATA\">1917</Col></Row><Row><Col id=\"CODE\">1918</Col><Col id=\"DATA\">1918</Col></Row><Row><Col id=\"CODE\">1919</Col><Col id=\"DATA\">1919</Col></Row><Row><Col id=\"CODE\">1920</Col><Col id=\"DATA\">1920</Col></Row><Row><Col id=\"CODE\">1921</Col><Col id=\"DATA\">1921</Col></Row><Row><Col id=\"CODE\">1922</Col><Col id=\"DATA\">1922</Col></Row><Row><Col id=\"CODE\">1923</Col><Col id=\"DATA\">1923</Col></Row><Row><Col id=\"CODE\">1924</Col><Col id=\"DATA\">1924</Col></Row><Row><Col id=\"CODE\">1925</Col><Col id=\"DATA\">1925</Col></Row><Row><Col id=\"CODE\">1926</Col><Col id=\"DATA\">1926</Col></Row><Row><Col id=\"CODE\">1927</Col><Col id=\"DATA\">1927</Col></Row><Row><Col id=\"CODE\">1928</Col><Col id=\"DATA\">1928</Col></Row><Row><Col id=\"CODE\">1929</Col><Col id=\"DATA\">1929</Col></Row><Row><Col id=\"CODE\">1930</Col><Col id=\"DATA\">1930</Col></Row><Row><Col id=\"CODE\">1931</Col><Col id=\"DATA\">1931</Col></Row><Row><Col id=\"CODE\">1932</Col><Col id=\"DATA\">1932</Col></Row><Row><Col id=\"CODE\">1933</Col><Col id=\"DATA\">1933</Col></Row><Row><Col id=\"CODE\">1934</Col><Col id=\"DATA\">1934</Col></Row><Row><Col id=\"CODE\">1935</Col><Col id=\"DATA\">1935</Col></Row><Row><Col id=\"CODE\">1936</Col><Col id=\"DATA\">1936</Col></Row><Row><Col id=\"CODE\">1937</Col><Col id=\"DATA\">1937</Col></Row><Row><Col id=\"CODE\">1938</Col><Col id=\"DATA\">1938</Col></Row><Row><Col id=\"CODE\">1939</Col><Col id=\"DATA\">1939</Col></Row><Row><Col id=\"CODE\">1940</Col><Col id=\"DATA\">1940</Col></Row><Row><Col id=\"CODE\">1941</Col><Col id=\"DATA\">1941</Col></Row><Row><Col id=\"CODE\">1942</Col><Col id=\"DATA\">1942</Col></Row><Row><Col id=\"CODE\">1943</Col><Col id=\"DATA\">1943</Col></Row><Row><Col id=\"CODE\">1944</Col><Col id=\"DATA\">1944</Col></Row><Row><Col id=\"CODE\">1945</Col><Col id=\"DATA\">1945</Col></Row><Row><Col id=\"CODE\">1946</Col><Col id=\"DATA\">1946</Col></Row><Row><Col id=\"CODE\">1947</Col><Col id=\"DATA\">1947</Col></Row><Row><Col id=\"CODE\">1948</Col><Col id=\"DATA\">1948</Col></Row><Row><Col id=\"CODE\">1949</Col><Col id=\"DATA\">1949</Col></Row><Row><Col id=\"CODE\">1950</Col><Col id=\"DATA\">1950</Col></Row><Row><Col id=\"CODE\">1951</Col><Col id=\"DATA\">1951</Col></Row><Row><Col id=\"CODE\">1952</Col><Col id=\"DATA\">1952</Col></Row><Row><Col id=\"CODE\">1953</Col><Col id=\"DATA\">1953</Col></Row><Row><Col id=\"CODE\">1954</Col><Col id=\"DATA\">1954</Col></Row><Row><Col id=\"CODE\">1955</Col><Col id=\"DATA\">1955</Col></Row><Row><Col id=\"CODE\">1956</Col><Col id=\"DATA\">1956</Col></Row><Row><Col id=\"CODE\">1957</Col><Col id=\"DATA\">1957</Col></Row><Row><Col id=\"CODE\">1958</Col><Col id=\"DATA\">1958</Col></Row><Row><Col id=\"CODE\">1959</Col><Col id=\"DATA\">1959</Col></Row><Row><Col id=\"CODE\">1960</Col><Col id=\"DATA\">1960</Col></Row><Row><Col id=\"CODE\">1961</Col><Col id=\"DATA\">1961</Col></Row><Row><Col id=\"CODE\">1962</Col><Col id=\"DATA\">1962</Col></Row><Row><Col id=\"CODE\">1963</Col><Col id=\"DATA\">1963</Col></Row><Row><Col id=\"CODE\">1964</Col><Col id=\"DATA\">1964</Col></Row><Row><Col id=\"CODE\">1965</Col><Col id=\"DATA\">1965</Col></Row><Row><Col id=\"CODE\">1966</Col><Col id=\"DATA\">1966</Col></Row><Row><Col id=\"CODE\">1967</Col><Col id=\"DATA\">1967</Col></Row><Row><Col id=\"CODE\">1968</Col><Col id=\"DATA\">1968</Col></Row><Row><Col id=\"CODE\">1969</Col><Col id=\"DATA\">1969</Col></Row><Row><Col id=\"CODE\">1970</Col><Col id=\"DATA\">1970</Col></Row><Row><Col id=\"CODE\">1971</Col><Col id=\"DATA\">1971</Col></Row><Row><Col id=\"CODE\">1972</Col><Col id=\"DATA\">1972</Col></Row><Row><Col id=\"CODE\">1973</Col><Col id=\"DATA\">1973</Col></Row><Row><Col id=\"CODE\">1974</Col><Col id=\"DATA\">1974</Col></Row><Row><Col id=\"CODE\">1975</Col><Col id=\"DATA\">1975</Col></Row><Row><Col id=\"CODE\">1976</Col><Col id=\"DATA\">1976</Col></Row><Row><Col id=\"CODE\">1977</Col><Col id=\"DATA\">1977</Col></Row><Row><Col id=\"CODE\">1978</Col><Col id=\"DATA\">1978</Col></Row><Row><Col id=\"CODE\">1979</Col><Col id=\"DATA\">1979</Col></Row><Row><Col id=\"CODE\">1980</Col><Col id=\"DATA\">1980</Col></Row><Row><Col id=\"CODE\">1981</Col><Col id=\"DATA\">1981</Col></Row><Row><Col id=\"CODE\">1982</Col><Col id=\"DATA\">1982</Col></Row><Row><Col id=\"CODE\">1983</Col><Col id=\"DATA\">1983</Col></Row><Row><Col id=\"CODE\">1984</Col><Col id=\"DATA\">1984</Col></Row><Row><Col id=\"CODE\">1985</Col><Col id=\"DATA\">1985</Col></Row><Row><Col id=\"CODE\">1986</Col><Col id=\"DATA\">1986</Col></Row><Row><Col id=\"CODE\">1987</Col><Col id=\"DATA\">1987</Col></Row><Row><Col id=\"CODE\">1988</Col><Col id=\"DATA\">1988</Col></Row><Row><Col id=\"CODE\">1989</Col><Col id=\"DATA\">1989</Col></Row><Row><Col id=\"CODE\">1990</Col><Col id=\"DATA\">1990</Col></Row><Row><Col id=\"CODE\">1991</Col><Col id=\"DATA\">1991</Col></Row><Row><Col id=\"CODE\">1992</Col><Col id=\"DATA\">1992</Col></Row><Row><Col id=\"CODE\">1993</Col><Col id=\"DATA\">1993</Col></Row><Row><Col id=\"CODE\">1994</Col><Col id=\"DATA\">1994</Col></Row><Row><Col id=\"CODE\">1995</Col><Col id=\"DATA\">1995</Col></Row><Row><Col id=\"CODE\">1996</Col><Col id=\"DATA\">1996</Col></Row><Row><Col id=\"CODE\">1997</Col><Col id=\"DATA\">1997</Col></Row><Row><Col id=\"CODE\">1998</Col><Col id=\"DATA\">1998</Col></Row><Row><Col id=\"CODE\">1999</Col><Col id=\"DATA\">1999</Col></Row><Row><Col id=\"CODE\">2000</Col><Col id=\"DATA\">2000</Col></Row><Row><Col id=\"CODE\">2001</Col><Col id=\"DATA\">2001</Col></Row><Row><Col id=\"CODE\">2002</Col><Col id=\"DATA\">2002</Col></Row><Row><Col id=\"CODE\">2003</Col><Col id=\"DATA\">2003</Col></Row><Row><Col id=\"CODE\">2004</Col><Col id=\"DATA\">2004</Col></Row><Row><Col id=\"CODE\">2005</Col><Col id=\"DATA\">2005</Col></Row><Row><Col id=\"CODE\">2006</Col><Col id=\"DATA\">2006</Col></Row><Row><Col id=\"CODE\">2007</Col><Col id=\"DATA\">2007</Col></Row><Row><Col id=\"CODE\">2008</Col><Col id=\"DATA\">2008</Col></Row><Row><Col id=\"CODE\">2009</Col><Col id=\"DATA\">2009</Col></Row><Row><Col id=\"CODE\">2010</Col><Col id=\"DATA\">2010</Col></Row><Row><Col id=\"CODE\">2011</Col><Col id=\"DATA\">2011</Col></Row><Row><Col id=\"CODE\">2012</Col><Col id=\"DATA\">2012</Col></Row><Row><Col id=\"CODE\">2013</Col><Col id=\"DATA\">2013</Col></Row><Row><Col id=\"CODE\">2014</Col><Col id=\"DATA\">2014</Col></Row><Row><Col id=\"CODE\">2015</Col><Col id=\"DATA\">2015</Col></Row><Row><Col id=\"CODE\">2016</Col><Col id=\"DATA\">2016</Col></Row><Row><Col id=\"CODE\">2017</Col><Col id=\"DATA\">2017</Col></Row><Row><Col id=\"CODE\">2018</Col><Col id=\"DATA\">2018</Col></Row><Row><Col id=\"CODE\">2019</Col><Col id=\"DATA\">2019</Col></Row><Row><Col id=\"CODE\">2020</Col><Col id=\"DATA\">2020</Col></Row><Row><Col id=\"CODE\">2021</Col><Col id=\"DATA\">2021</Col></Row><Row><Col id=\"CODE\">2022</Col><Col id=\"DATA\">2022</Col></Row><Row><Col id=\"CODE\">2023</Col><Col id=\"DATA\">2023</Col></Row><Row><Col id=\"CODE\">2024</Col><Col id=\"DATA\">2024</Col></Row><Row><Col id=\"CODE\">2025</Col><Col id=\"DATA\">2025</Col></Row><Row><Col id=\"CODE\">2026</Col><Col id=\"DATA\">2026</Col></Row><Row><Col id=\"CODE\">2027</Col><Col id=\"DATA\">2027</Col></Row><Row><Col id=\"CODE\">2028</Col><Col id=\"DATA\">2028</Col></Row><Row><Col id=\"CODE\">2029</Col><Col id=\"DATA\">2029</Col></Row><Row><Col id=\"CODE\">2030</Col><Col id=\"DATA\">2030</Col></Row><Row><Col id=\"CODE\">2031</Col><Col id=\"DATA\">2031</Col></Row><Row><Col id=\"CODE\">2032</Col><Col id=\"DATA\">2032</Col></Row><Row><Col id=\"CODE\">2033</Col><Col id=\"DATA\">2033</Col></Row><Row><Col id=\"CODE\">2034</Col><Col id=\"DATA\">2034</Col></Row><Row><Col id=\"CODE\">2035</Col><Col id=\"DATA\">2035</Col></Row><Row><Col id=\"CODE\">2036</Col><Col id=\"DATA\">2036</Col></Row><Row><Col id=\"CODE\">2037</Col><Col id=\"DATA\">2037</Col></Row><Row><Col id=\"CODE\">2038</Col><Col id=\"DATA\">2038</Col></Row><Row><Col id=\"CODE\">2039</Col><Col id=\"DATA\">2039</Col></Row><Row><Col id=\"CODE\">2040</Col><Col id=\"DATA\">2040</Col></Row><Row><Col id=\"CODE\">2041</Col><Col id=\"DATA\">2041</Col></Row><Row><Col id=\"CODE\">2042</Col><Col id=\"DATA\">2042</Col></Row><Row><Col id=\"CODE\">2043</Col><Col id=\"DATA\">2043</Col></Row><Row><Col id=\"CODE\">2044</Col><Col id=\"DATA\">2044</Col></Row><Row><Col id=\"CODE\">2045</Col><Col id=\"DATA\">2045</Col></Row><Row><Col id=\"CODE\">2046</Col><Col id=\"DATA\">2046</Col></Row><Row><Col id=\"CODE\">2047</Col><Col id=\"DATA\">2047</Col></Row><Row><Col id=\"CODE\">2048</Col><Col id=\"DATA\">2048</Col></Row><Row><Col id=\"CODE\">2049</Col><Col id=\"DATA\">2049</Col></Row><Row><Col id=\"CODE\">2050</Col><Col id=\"DATA\">2050</Col></Row><Row><Col id=\"CODE\">2051</Col><Col id=\"DATA\">2051</Col></Row><Row><Col id=\"CODE\">2052</Col><Col id=\"DATA\">2052</Col></Row><Row><Col id=\"CODE\">2053</Col><Col id=\"DATA\">2053</Col></Row><Row><Col id=\"CODE\">2054</Col><Col id=\"DATA\">2054</Col></Row><Row><Col id=\"CODE\">2055</Col><Col id=\"DATA\">2055</Col></Row><Row><Col id=\"CODE\">2056</Col><Col id=\"DATA\">2056</Col></Row><Row><Col id=\"CODE\">2057</Col><Col id=\"DATA\">2057</Col></Row><Row><Col id=\"CODE\">2058</Col><Col id=\"DATA\">2058</Col></Row><Row><Col id=\"CODE\">2059</Col><Col id=\"DATA\">2059</Col></Row><Row><Col id=\"CODE\">2060</Col><Col id=\"DATA\">2060</Col></Row><Row><Col id=\"CODE\">2061</Col><Col id=\"DATA\">2061</Col></Row><Row><Col id=\"CODE\">2062</Col><Col id=\"DATA\">2062</Col></Row><Row><Col id=\"CODE\">2063</Col><Col id=\"DATA\">2063</Col></Row><Row><Col id=\"CODE\">2064</Col><Col id=\"DATA\">2064</Col></Row><Row><Col id=\"CODE\">2065</Col><Col id=\"DATA\">2065</Col></Row><Row><Col id=\"CODE\">2066</Col><Col id=\"DATA\">2066</Col></Row><Row><Col id=\"CODE\">2067</Col><Col id=\"DATA\">2067</Col></Row><Row><Col id=\"CODE\">2068</Col><Col id=\"DATA\">2068</Col></Row><Row><Col id=\"CODE\">2069</Col><Col id=\"DATA\">2069</Col></Row><Row><Col id=\"CODE\">2070</Col><Col id=\"DATA\">2070</Col></Row><Row><Col id=\"CODE\">2071</Col><Col id=\"DATA\">2071</Col></Row><Row><Col id=\"CODE\">2072</Col><Col id=\"DATA\">2072</Col></Row><Row><Col id=\"CODE\">2073</Col><Col id=\"DATA\">2073</Col></Row><Row><Col id=\"CODE\">2074</Col><Col id=\"DATA\">2074</Col></Row><Row><Col id=\"CODE\">2075</Col><Col id=\"DATA\">2075</Col></Row><Row><Col id=\"CODE\">2076</Col><Col id=\"DATA\">2076</Col></Row><Row><Col id=\"CODE\">2077</Col><Col id=\"DATA\">2077</Col></Row><Row><Col id=\"CODE\">2078</Col><Col id=\"DATA\">2078</Col></Row><Row><Col id=\"CODE\">2079</Col><Col id=\"DATA\">2079</Col></Row><Row><Col id=\"CODE\">2080</Col><Col id=\"DATA\">2080</Col></Row><Row><Col id=\"CODE\">2081</Col><Col id=\"DATA\">2081</Col></Row><Row><Col id=\"CODE\">2082</Col><Col id=\"DATA\">2082</Col></Row><Row><Col id=\"CODE\">2083</Col><Col id=\"DATA\">2083</Col></Row><Row><Col id=\"CODE\">2084</Col><Col id=\"DATA\">2084</Col></Row><Row><Col id=\"CODE\">2085</Col><Col id=\"DATA\">2085</Col></Row><Row><Col id=\"CODE\">2086</Col><Col id=\"DATA\">2086</Col></Row><Row><Col id=\"CODE\">2087</Col><Col id=\"DATA\">2087</Col></Row><Row><Col id=\"CODE\">2088</Col><Col id=\"DATA\">2088</Col></Row><Row><Col id=\"CODE\">2089</Col><Col id=\"DATA\">2089</Col></Row><Row><Col id=\"CODE\">2090</Col><Col id=\"DATA\">2090</Col></Row><Row><Col id=\"CODE\">2091</Col><Col id=\"DATA\">2091</Col></Row><Row><Col id=\"CODE\">2092</Col><Col id=\"DATA\">2092</Col></Row><Row><Col id=\"CODE\">2093</Col><Col id=\"DATA\">2093</Col></Row><Row><Col id=\"CODE\">2094</Col><Col id=\"DATA\">2094</Col></Row><Row><Col id=\"CODE\">2095</Col><Col id=\"DATA\">2095</Col></Row><Row><Col id=\"CODE\">2096</Col><Col id=\"DATA\">2096</Col></Row><Row><Col id=\"CODE\">2097</Col><Col id=\"DATA\">2097</Col></Row><Row><Col id=\"CODE\">2098</Col><Col id=\"DATA\">2098</Col></Row><Row><Col id=\"CODE\">2099</Col><Col id=\"DATA\">2099</Col></Row><Row><Col id=\"CODE\">2100</Col><Col id=\"DATA\">2100</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">MSG0001</Col><Col id=\"DATA\">저장되었습니다.</Col></Row><Row><Col id=\"CODE\">MSG0002</Col><Col id=\"DATA\">조회되었습니다.</Col></Row><Row><Col id=\"CODE\">MSG0003</Col><Col id=\"DATA\">{0}은(는) 삭제할수 없습니다. {1}에 문의하세요</Col></Row><Row><Col id=\"CODE\">MSG0004</Col><Col id=\"DATA\">정말로 삭제하시겠습니까?</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("desktop");
            this.set_licenseurl("NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("nps 공사관리시스템");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_layered("true");
            mainframe.set_openstatus("maximize");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("*,0,0");
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("Login",null,null,null,null,null,null,"frame::Login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("frame::Login.xfdl");


            var frame2 = new ChildFrame("Top",null,null,null,null,null,null,"",frame0);
            frame2.set_showtitlebar("false");
            frame2.set_showstatusbar("false");
            frame2.set_dragmovetype("none");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("264,*");
            frame3.set_showtitlebar("false");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("Left",null,null,null,null,null,null,"",frame3);
            frame4.set_showtitlebar("false");
            frame4.set_dragmovetype("none");
            frame3.addChild(frame4.name, frame4);

            var frame5 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,frame3);
            frame5.set_showtitlebar("false");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("Tab",null,null,null,null,null,null,"",frame5);
            frame6.set_showtitlebar("false");
            frame6.set_dragmovetype("none");
            frame5.addChild(frame6.name, frame6);

            var frame7 = new FrameSet("Work",null,null,null,null,null,null,frame5);
            frame7.set_background("url(\'theme://images/happybutterfly.png\') no-repeat center");
            frame5.addChild(frame7.name, frame7);

            var frame8 = new ChildFrame("Main",null,null,null,null,null,null,"",frame5);
            frame8.set_showtitlebar("false");
            frame8.set_dragmovetype("none");
            frame5.addChild(frame8.name, frame8);
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onerror",this.Application_onerror,this);
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("App_Desktop.xadl", function() {

        /************************************************************************************************
         * Application Event 영역
         ************************************************************************************************/
        /**
         * Application onload
         */
        this.Application_onload = function(obj,e)
        {
        	//접속 환경별 서비스 URL 셋팅
        	var objEnv = nexacro.getEnvironment();
        	var objSvcUrl = objEnv.services["svcurl"];
        	var urlPath;

        	if (system.navigatorname == "nexacro")
        	{
        		if(objSvcUrl == null || objSvcUrl !='' || objSvcUrl!= undefined)
        		{
        			urlPath = "http://localhost:8080/nps/";
        		}
        		else
        		{
        			urlPath = objSvcUrl;
        		}
        	}
        	else
        	{
        		var sXadl = nexacro.getApplication().xadl;

        		if(sXadl.indexOf("http://127.0.0.1/") > -1)
        		{
        			if(objSvcUrl == null || objSvcUrl !='' || objSvcUrl!= undefined)
        			{
        				urlPath = "http://localhost:8080/nps/";
        			}
        			else
        			{
        				urlPath = objSvcUrl;
        			}
        		}
        		else
        		{
        			urlPath = window.location.protocol + "//" + window.location.host + "/nps/";
        		}
        	}

        	//objEnv.services["svcurl"].set_url(urlPath);
        	objEnv.services["xeni"].set_url(urlPath);
        };

        /**
         * @description ESC 통신중단 방지
        */
        this.Application_onerror = function(obj,e)
        {
        	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
        	if (e.errorcode == -2147418039) {
        		return true;
        	}
        };
        });
        this.checkLicense("NexacroN_client_license.xml");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::NxPivot.xcss");
        this.loadCss("xcssrc::component.xcss");
        this.loadCss("xcssrc::grid.xcss");
        this.loadCss("xcssrc::compositeModule.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
