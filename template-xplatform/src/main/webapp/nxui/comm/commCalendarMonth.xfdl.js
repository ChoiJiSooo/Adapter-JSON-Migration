(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ModuleCalendarMonth");
            this.set_titletext("월달력");
            this.set_border("1px solid #2b3753");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_00","0","0",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#2b3753");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Combo("cob_year","60","2",null,"30","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("gdsYear");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_displayrowcount("10");
            obj.set_cssclass("cmb_WF_CalMonth");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev","20","2","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("btn_WF_CalPrev");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"2","20","30","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_CalNext");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","14","47","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","58","47","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","102","47","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_04","146","47","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_05","14","80","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_06","58","80","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_07","102","80","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_08","146","80","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_09","14","113","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_10","58","113","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_11","102","113","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_12","146","113","36","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_day","10","220","82","18",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM");
            obj.set_visible("false");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","350","10","250","220",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("div_00");
            obj.set_cssclass("div_GD_Tip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","10","90","140","90",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("★class 교체해서 적용\r\n\r\nbtn_WF_CalMonth \r\nbtn_WF_CalMonth_S\r\n");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_02","32","24","36","28",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_CalMonth");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_02_00","95","24","36","28",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_CalMonth_S");
            this.div_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_00.form
            obj = new Layout("default","",0,0,this.div_00.form,function(p){});
            this.div_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",200,160,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commCalendarMonth.xfdl", function() {
        /**
         * 통합정보시스템 고도화 구축
         * @FileName    ModuleMonthCalendar.xfdl
         * @Creator     최병욱
         * @CreateDate  2022.12.28
         * @Description 월달력
         ************** 소스 수정 이력 ***********************************************
         * date                Modifier                Description
         *******************************************************************************
         * 2022.12.28          최병욱                    최초 생성
         *******************************************************************************
         */

        /************************************************************************************************
         * 1. FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_selDate = "";
        /************************************************************************************************
         * 2. FORM EVENT 영역(onload)
         ************************************************************************************************/
        // onload 이벤트
        this.form_onload = function(obj,e)
        {
        	this.fn_setInit(obj);
        };

        // 화면 초기화 정의
        this.fn_setInit = function(obj)
        {
        	var userComp = this.parent.user_comp;
        	var value = "";

        	if (userComp instanceof Grid) { // Grid
        		value = this.parent.user_value;
        	} else { // Calendar
        		value = userComp.value;
        	}

        	if (this.gfnIsNull(value)) value = this.gfnGetDate();
        	this.cal_day.set_value(value);

        	// 년
        	var year = value.substr(0, 4);
        	this.cob_year.set_value(year);

        	// 월
        	var month = value.substr(4, 2);
        	this.fn_setMonth(month);
        };

        /************************************************************************************************
         * 3. TRANSACTION 서비스 호출 처리
         ************************************************************************************************/


        /************************************************************************************************
         * 4. CALLBACK 함수 처리부분
         ************************************************************************************************/


        /************************************************************************************************
         * 5. 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @class  월 설정 <br>
         * @param  N/A
         * @param  {String} 변수명 - 설명
         * @return N/A
         */
        this.fn_setMonth = function(month)
        {
        	var arrMonth = [this.btn_01, this.btn_02, this.btn_03, this.btn_04,
        					this.btn_05, this.btn_06, this.btn_07, this.btn_08,
        					this.btn_09, this.btn_10, this.btn_11, this.btn_12
        					];

        	for (var i = 0; i < arrMonth.length; i++) {
        		var tmp = arrMonth[i].name.replace("btn_", "");
        		if (month == tmp) {
        			arrMonth[i].setSelectStatus(true);
        		} else {
        			arrMonth[i].setSelectStatus(false);
        		}
        	}
        };

        /************************************************************************************************
         * 6. 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // 이전 년
        this.btn_Prev_onclick = function(obj,e)
        {
        	var value = this.cal_day.getYear() - 1;
        	this.cob_year.set_value(value);
        	this.cal_day.set_value(value);
        };

        // 다음 년
        this.btn_Next_onclick = function(obj,e)
        {
        	var value = this.cal_day.getYear() + 1;
        	this.cob_year.set_value(value);
        	this.cal_day.set_value(value);
        };

        // 월 선택
        this.month_onclick = function(obj,e)
        {
        	var year  = this.cob_year.value;
        	var month = obj.name.replace("btn_", "");
        	var value = year + month + "01";

        	var userComp = this.parent.user_comp;
        	if (userComp instanceof Grid) { // Grid
        		var bindDs = this.parent.user_bindDs;
        		var column = this.parent.user_column;

        		//bindDs.setColumn(bindDs.rowposition, column, value);
        		// dataset oncolumnchanged event와 충돌나면서
        		// date format이 초기화 안되는 현상발생
        		this.fv_selDate = value;
        		this.setTimer(10000,20);
        	}
        	// Calendar
        	else {
        		//이전 값 가져오기
        		var preValue  = userComp.value;

        		// 변경된 값 가져오기
        		var postValue = value;

        		//값 변경에 대한 Event 호출
        		//Calendar의 onchanged 이벤트 발생됨
        		userComp._on_value_change(preValue, postValue);
        		userComp.set_value(value);
        	}
        	this.parent.closePopup(value);
        };


        this.ModuleCalendarMonth_ontimer = function(obj,e)
        {
        	if (e.timerid == 10000){
        		this.killTimer(10000);
        		var userComp = this.parent.user_comp;
        		var bindDs = this.parent.user_bindDs;
        		var column = this.parent.user_column;

        		bindDs.setColumn(bindDs.rowposition, column, this.fv_selDate);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.ModuleCalendarMonth_ontimer,this);
            this.cob_year.addEventHandler("onitemchanged",this.cob_Year_onitemchanged,this);
            this.btn_prev.addEventHandler("onclick",this.btn_Prev_onclick,this);
            this.btn_next.addEventHandler("onclick",this.btn_Next_onclick,this);
            this.btn_01.addEventHandler("onclick",this.month_onclick,this);
            this.btn_02.addEventHandler("onclick",this.month_onclick,this);
            this.btn_03.addEventHandler("onclick",this.month_onclick,this);
            this.btn_04.addEventHandler("onclick",this.month_onclick,this);
            this.btn_05.addEventHandler("onclick",this.month_onclick,this);
            this.btn_06.addEventHandler("onclick",this.month_onclick,this);
            this.btn_07.addEventHandler("onclick",this.month_onclick,this);
            this.btn_08.addEventHandler("onclick",this.month_onclick,this);
            this.btn_09.addEventHandler("onclick",this.month_onclick,this);
            this.btn_10.addEventHandler("onclick",this.month_onclick,this);
            this.btn_11.addEventHandler("onclick",this.month_onclick,this);
            this.btn_12.addEventHandler("onclick",this.month_onclick,this);
            this.div_00.form.btn_02.addEventHandler("onclick",this.month_onclick,this);
            this.div_00.form.btn_02_00.addEventHandler("onclick",this.month_onclick,this);
        };
        this.loadIncludeScript("commCalendarMonth.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
