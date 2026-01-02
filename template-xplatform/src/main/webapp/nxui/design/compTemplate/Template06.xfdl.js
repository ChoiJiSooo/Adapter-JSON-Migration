(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template");
            this.set_titletext("조회+그리드+디테일(상하)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("da_grd", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1000000000001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">1000000000002</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1000000000003</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">1000000000004</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">1000000000005</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">1000000000006</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">1000000000007</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">1000000000008</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">1000000000009</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">1000000000010</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">1000000000011</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">선택</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">미선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0",null,null,"157","25","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","117",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","0","78",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","39",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","0","0",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10","125","5","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","257","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("스핀");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","257","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("콤보");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","257","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","0","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00","125","44","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_value("100");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","125","83","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","125","122","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_value("20160725");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","382","5","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","384","44","52","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("남");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","446","44","40","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("여");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","384","83","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("1");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","257","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","382","122","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_SchPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button91","475","122","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_EdtPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","515","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","640","5","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","772","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","515","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","772","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","515","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","772","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","515","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin01","640","44","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_value("100");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","640","83","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","640","122","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_value("20160725");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","897","5","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","899","44","40","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("남");
            obj.set_cssclass("essential");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","958","44","40","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("여");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio01","899","83","125","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_cssclass("essential");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("1");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","772","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","897","122","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("edt_WF_SchPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1003","122","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_EdtPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","0","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","0","0",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28","0",null,null,"2","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Label_Bottom");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,"160","50",null,"Div00:0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("디테일타이틀");
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"91","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch_P");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX","87","10","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_tooltiptext("edit");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","232","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("47");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","466","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("49");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","0","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("51");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","232","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("53");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","466","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("55");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","678","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","678","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("59");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_XXXX","87","50","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("61");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new MaskEdit("msk_XXXX","319","10","142","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("62");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_XXXX","319","50","142","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("63");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_XXXX","553","10","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("64");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("1");
            obj.set_index("1");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_XXXX","553","50","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("65");
            obj.set_text("14세 이상");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX00","765","50","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("67");
            obj.set_tooltiptext("edit");
            this.div_search.addChild(obj.name, obj);

            obj = new Spin("spn_XXXX","765","10","141","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("68");
            obj.set_value("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"67","30","20","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"30","30","Button00:5","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Reload");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static54",null,"91","300","15","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n25");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00",null,"90","160","50","840",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","div_search:0","123","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("그리드타이틀2");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Static03_00:0",null,null,"25","Static03:0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("da_grd");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"28\"/><Column size=\"468\"/><Column size=\"120\"/><Column size=\"63\"/><Column size=\"84\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Normal\"/><Cell col=\"3\" text=\"Number\"/><Cell col=\"4\" text=\"Text\"/><Cell col=\"5\" text=\"Date\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" text=\"bind:Column1\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column3\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:Column4\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" colspan=\"3\" style=\"align:right middle;\" text=\"43,843,145\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divModuleBtn",null,null,"300","50","25","Div00:0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div_00");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","30","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_New");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_00","219","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Modify");
            obj.set_fittocontents("width");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_03_00_00_00","136","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Del");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_03_00","83","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_GrdSave");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Div("divGrdBtn",null,"div_search:0","685","50","25",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("div_00");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow","30","15","75","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_AddRow");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnDelRow","111","15","75","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_DelRow");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","541","15","103","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","419","15","116","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnCustom","588","25","87","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("5");
            obj.set_text("커스텀버튼");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","231","17","64","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_GrdSave");
            this.divGrdBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divModuleBtn.form
            obj = new Layout("default","",0,0,this.divModuleBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_spacing("15px 0px 5px 0px");
            obj.set_horizontalgap("5");
            obj.set_flexmainaxisalign("end");
            this.divModuleBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBtn.form
            obj = new Layout("default","",0,0,this.divGrdBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("5");
            obj.set_spacing("15px 0px 5px 0px");
            this.divGrdBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.Div00.form.Radio01.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.Div00.form.Static20.addEventHandler("onclick",this.Div00_Static20_onclick,this);
            this.div_search.form.rdo_XXXX.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
        };
        this.loadIncludeScript("Template06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
