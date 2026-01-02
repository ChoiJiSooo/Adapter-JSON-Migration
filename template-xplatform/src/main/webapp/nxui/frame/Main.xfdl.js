(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Main");
            this.set_titletext("New Form");
            this.set_background("linear-gradient(to right,#343a40 0%,#2d1517 100%) rgb(45,21,23)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,979);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"gamsin\"/><ConstColumn id=\"ConstColumn1\" type=\"STRING\" size=\"30\" value=\"17\"/><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchCondition\">0</Col><Col id=\"searchUseYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"regUser\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개인정보 처리방침 \r\nSK하이스텍㈜ 경기도 이천시 부발읍 경충대로 2091\r\n\r\n \r\n대표번호: 031-8094-7669\r\n\r\nCOPYRIGHT © 2023 SK HYSTEC INC. ALL RIGHTS RESERVED.");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"66","30","20","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","91",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리ID\"/><Cell col=\"1\" text=\"카테고리명\"/><Cell col=\"2\" text=\"사용여부\"/><Cell col=\"3\" text=\"Description\"/><Cell col=\"4\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:useYn\"/><Cell col=\"3\" text=\"bind:description\"/><Cell col=\"4\" text=\"bind:regUser\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,null,"75","30","20","24",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_AddRow");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,979,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_background("linear-gradient(to right,#343a40 0%,#2d1517 100%) rgb(45,21,23)");

                p.sta00.set_taborder("0");
                p.sta00.set_text("개인정보 처리방침 \r\nSK하이스텍㈜ 경기도 이천시 부발읍 경충대로 2091\r\n\r\n \r\n대표번호: 031-8094-7669\r\n\r\nCOPYRIGHT © 2023 SK HYSTEC INC. ALL RIGHTS RESERVED.");
                p.sta00.move("0",null,null,"60","0","0");

                p.div_search.set_taborder("1");
                p.div_search.set_text("Div00");
                p.div_search.set_cssclass("div_WF_SearchBg");
                p.div_search.set_formscrollbartype("none none");
                p.div_search.move("20","20",null,"50","20",null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("ds_list");
                p.Grid00.getSetter("useinputpanel").set("false");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("20","91",null,null,"20","70");

                p.btnAddRow.set_taborder("3");
                p.btnAddRow.set_text("등록");
                p.btnAddRow.set_fittocontents("width");
                p.btnAddRow.set_cssclass("btn_WF_AddRow");
                p.btnAddRow.move(null,null,"75","30","20","24");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",850,2430,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","",450,2270,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_XXXX","value","ds_param","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Main.xfdl", function() {

        this.Main_onload = function(obj,e)
        {
        };


        this.div_search_Button00_onclick = function(obj,e)
        {
        	let option = {};
        	option.svcId 	= "selectSvc";
        	option.svcUrl 	= "egovSampleList.do";
        	option.inDs 	= "ds_input=ds_param";
        	option.outDs 	= "ds_list=ds_output";
        	option.argument = "a=b";
        	option.callback = "fn_callback";
        	option.dataType = "0";
        	this.gfnTransaction(this, option);
        };


        this.fn_callback = function (svcid, errcd, errmsg)
        {

        };


        this.btnAddRow_onclick = function(obj,e)
        {
        	var option = {
        		popupId  : "modalPopup",
        		url      : "design::compTemplate/insert.xfdl",
        		title    : "신규등록",
        		arg      : "",
        		resizable : true,
        		callback : function(popupId, retVal){
        			this.div_search_Button00_onclick();
        		}
        	};


        	this.gfnModal(this, option);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var option = {
        		popupId  : "modalPopup",
        		url      : "design::compTemplate/update.xfdl",
        		title    : "내용수정",
        		arg      : "",
        		resizable : true,
        		callback : function(popupId, retVal){
        			this.div_search_Button00_onclick();
        		}
        	};

        	option.arg = {
        		param : this.ds_list.getColumn(e.row, "id")
        	};


        	this.gfnModal(this, option);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Main_onload,this);
            this.addEventHandler("onhscroll",this.Main_onhscroll,this);
            this.addEventHandler("onvscroll",this.Main_onvscroll,this);
            this.addEventHandler("ontimer",this.Main_ontimer,this);
            this.div_search.form.Button00.addEventHandler("onclick",this.div_search_Button00_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
        };
        this.loadIncludeScript("Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
