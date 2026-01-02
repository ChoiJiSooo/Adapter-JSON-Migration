(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commCalendarFromTo");
            this.set_titletext("기간달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,27);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_FromTo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FROMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Holyday", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"BGCOLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">20141117</Col><Col id=\"COLOR\">#ffffff</Col><Col id=\"BGCOLOR\">#ff0000</Col></Row><Row><Col id=\"DATE\">20141118</Col><Col id=\"COLOR\">#ffffff</Col><Col id=\"BGCOLOR\">#00ff00</Col></Row><Row><Col id=\"DATE\">20141119</Col><Col id=\"COLOR\">#ffffff</Col><Col id=\"BGCOLOR\">#0000ff</Col></Row><Row><Col id=\"DATE\">20141120</Col><Col id=\"COLOR\">#ffffff</Col><Col id=\"BGCOLOR\">#ffff00</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calFrom","0","0","45.36%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_buttonsize("0 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","calFrom:0","0","25",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","Static00:0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_buttonsize("0 0");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popdivCalendar","0","44","400","240",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_border("1px solid #2b3753");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","200","0","1",null,null,"1",null,null,null,null,this.popdivCalendar.form);
            obj.set_taborder("5");
            obj.set_background("#f2f2f2");
            this.popdivCalendar.addChild(obj.name, obj);

            obj = new Static("sta_01","0",null,null,"40","0","0",null,null,null,null,this.popdivCalendar.form);
            obj.set_taborder("4");
            obj.set_background("#f2f3f3");
            this.popdivCalendar.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"51","0",null,null,null,null,null,this.popdivCalendar.form);
            obj.set_taborder("3");
            obj.set_background("#2b3753");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.popdivCalendar.addChild(obj.name, obj);

            obj = new Calendar("calFrom","10","6","169",null,null,"sta_01:10",null,null,null,null,this.popdivCalendar.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("cal_WF_FromTo");
            this.popdivCalendar.addChild(obj.name, obj);

            obj = new Calendar("calTo","sta_00_00:10","6","169",null,null,"sta_01:10",null,null,null,null,this.popdivCalendar.form);
            obj.set_taborder("1");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("cal_WF_FromTo");
            this.popdivCalendar.addChild(obj.name, obj);

            obj = new Static("stToday","12",null,null,"25","12","7",null,null,null,null,this.popdivCalendar.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Today");
            this.popdivCalendar.addChild(obj.name, obj);

            obj = new Static("staLine","0","51",null,"1","0",null,null,null,null,null,this.popdivCalendar.form);
            obj.set_taborder("6");
            obj.set_background("#2b3753");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.popdivCalendar.addChild(obj.name, obj);

            obj = new Button("Button00","calFrom:-30","1","30",null,null,"1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Cal");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","calTo:-30","1","30",null,null,"1",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Cal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.popdivCalendar.form
            obj = new Layout("default","",0,0,this.popdivCalendar.form,function(p){});
            this.popdivCalendar.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",280,27,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","popdivCalendar.calFrom","value","ds_FromTo","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","popdivCalendar.calTo","value","ds_FromTo","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commCalendarFromTo.xfdl", function() {
        /**
        *  nexacro nps
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    commCalendarFromTo.xfdl
        *  @Creator     presales
        *  @CreateDate  2019/10/14
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2019/10/14          presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        this.commCalendarFromTo_onload = function (obj, e)
        {

        	var sToDate = this.gfnGetDate();
        	var sFromDate = this.gfnAddMonth(sToDate, -1);

        	//this.ds_FromTo.setColumn(0, "FROMDATE", sFromDate);
        	//this.ds_FromTo.setColumn(0, "TODATE", sToDate);

        // 	this.calFrom.set_value(sFromDate);
        // 	this.calTo.set_value(sToDate);
        	this.popdivCalendar.form.calFrom.set_value(sFromDate);
        	this.popdivCalendar.form.calTo.set_value(sToDate);

        	this.popdivCalendar.form.stToday.set_text("" + sToDate.substr(0, 4) + "-" + sToDate.substr(4, 2) + "-" + sToDate.substr(6, 2));
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 버튼 click이벤트
        */
        this.Button_onclick = function (obj, e)
        {
        	this.popdivCalendar.trackPopupByComponent(this.calFrom, 0, 30);
        };

        /**
         * @description 팝업 div 종료시 이벤트
        */
        this.popdivCalendar_oncloseup = function(obj,e)
        {
        	var sFormDate = this.popdivCalendar.form.calFrom.value;
        	var sToDate = this.popdivCalendar.form.calTo.value;

        	if(sFormDate > sToDate) {
        		sFormDate = sToDate;
        	}

        	this.calFrom.set_value(sFormDate);
        	this.calTo.set_value(sToDate);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commCalendarFromTo_onload,this);
            this.popdivCalendar.addEventHandler("oncloseup",this.popdivCalendar_oncloseup,this);
            this.Button00.addEventHandler("onclick",this.Button_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("commCalendarFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
