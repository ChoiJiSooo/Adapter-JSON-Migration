package egovframework.rte.sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.ModelAndView;

import egovframework.rte.cmmn.ria.support.UdDTO;
import egovframework.rte.fdl.property.EgovPropertyService;
import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;
import egovframework.rte.sample.service.EgovSampleService;
import egovframework.rte.sample.service.SampleDefaultVO;
import egovframework.rte.sample.service.SampleVO;

/**
 * @Class Name : EgovSampleController.java
 * @Description : EgovSample Controller class
 * @Modification Information @ @
 * 
 * @author
 * @since 2009.02.01
 * @version 1.0
 * @see Copyright (C) 2009 by MOPAS All right reserved.
 */

@Controller
public class EgovSampleController {

	@Resource(name = "sampleService")
	private EgovSampleService sampleService;

	/** EgovPropertyService */
	@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;

	@RequestMapping(value = "/xplatform/egovSampleList.do")
	public ModelAndView selectSampleList4Mi(@ModelAttribute("searchVO") SampleDefaultVO udDtoVO)
	        throws Exception {
		
System.out.println("-------- controller : /xplatform/egovSampleList.do");

		ModelAndView mav = new ModelAndView("xplatformViewByMap");
		
		try
		{
			PaginationInfo paginationInfo = new PaginationInfo();
			paginationInfo.setCurrentPageNo(udDtoVO.getPageIndex());
			paginationInfo.setRecordCountPerPage(udDtoVO.getPageUnit());
			paginationInfo.setPageSize(udDtoVO.getPageSize());

			udDtoVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
			udDtoVO.setLastIndex(paginationInfo.getLastRecordIndex());
			udDtoVO.setRecordCountPerPage(paginationInfo.getRecordCountPerPage());
			
			List sampleList = sampleService.selectSampleList(udDtoVO);
			
			System.out.println("sampleList 레코드 카운드는 ==========> "+sampleList.size());
			int totCnt = sampleService.selectSampleListTotCnt(udDtoVO);
			paginationInfo.setTotalRecordCount(totCnt);
			//mav.addAttribute("paginationInfo", paginationInfo);
			

			mav.addObject("MiResultCode", "0");
			mav.addObject("MiResultMsg", "success");
			
			mav.addObject("MiDTO", sampleList);

		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject("MiResultCode", "-1");
			mav.addObject("MiResultMsg", e.toString());
		}
		return mav;
	}
	
	@RequestMapping(value = "/xplatform/egovSampleInsert.do")
	//public ModelAndView updateSampleList4Mi(Object vo, Model model, @ModelAttribute("voInfo") VOInfo4Mi voInfo)
	public ModelAndView insertSampleList4Mi(Object vo, Model model, HttpServletRequest request)
	        throws Exception {
		
System.out.println("-------- controller : /xplatform/egovSampleInsert.do");
		
		ModelAndView mav = new ModelAndView("xplatformViewByVO");
		
		try
		{
			sampleService.insertSample((SampleVO)vo);
			
			mav.addObject("MiResultCode", "0");
			mav.addObject("MiResultMsg", "success");

		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject("MiResultCode", "-1");
			mav.addObject("MiResultMsg", e.toString());
		}
		return mav;
	}
	
	/**
	 *  
	 * @param miDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/xplatform/egovSampleDetail.do")
	public ModelAndView detailSampleList4Mi(UdDTO miDto, Model model)
	        throws Exception {
		
System.out.println("-------- controller : /xplatform/egovSampleDetail.do");
		
		ModelAndView mav = new ModelAndView("xplatformViewByVO");
		
		try
		{
			Map<String, String> param = miDto.getVariableList();
			
			SampleVO sampleVO = new SampleVO();
			sampleVO.setId(param.get("selectedId"));
			mav.addObject("MiDTO", selectSample(sampleVO, new SampleDefaultVO()));
			
			mav.addObject("MiResultCode", "0");
			mav.addObject("MiResultMsg", "success");

		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject("MiResultCode", "-1");
			mav.addObject("MiResultMsg", e.toString());
		}
		return mav;
	}
	
	@RequestMapping(value = "/xplatform/egovSampleDetailDS.do")
	public ModelAndView detailSampleList4MiByDataset(Object vo, Model model)
	        throws Exception {
		
System.out.println("-------- controller : /xplatform/egovSampleDetailDS.do");
		
		ModelAndView mav = new ModelAndView("xplatformViewByVO");
		
		try
		{
			mav.addObject("MiDTO", selectSample((SampleVO)vo, new SampleDefaultVO()));
			
			mav.addObject("MiResultCode", "0");
			mav.addObject("MiResultMsg", "success");

		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject("MiResultCode", "-1");
			mav.addObject("MiResultMsg", e.toString());
		}
		return mav;
	}
	
	/**
	 *  
	 * @param miDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/xplatform/egovSampleUpdate.do")
	//public ModelAndView updateSampleList4Mi(Object vo, Model model, @ModelAttribute("voInfo") VOInfo4Mi voInfo)
	public ModelAndView updateSampleList4Mi(Object vo, Model model, HttpServletRequest request)
	        throws Exception {

System.out.println("-------- controller : /xplatform/egovSampleUpdate.do");
		
		ModelAndView mav = new ModelAndView("xplatformViewByVO");
		
		try
		{
			sampleService.updateSample((SampleVO)vo);
			
			mav.addObject("MiResultCode", "0");
			mav.addObject("MiResultMsg", "success");

		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject("MiResultCode", "-1");
			mav.addObject("MiResultMsg", e.toString());
		}
		return mav;
	}

	
	
	@RequestMapping(value = "/xplatform/egovSampleDelete.do")
	//public ModelAndView updateSampleList4Mi(Object vo, Model model, @ModelAttribute("voInfo") VOInfo4Mi voInfo)
	public ModelAndView deleteSampleList4Mi(UdDTO miDto, Model model)
	        throws Exception {
		
System.out.println("-------- controller : /xplatform/egovSampleDelete.do");
		
		ModelAndView mav = new ModelAndView("xplatformViewByVO");
		
		try
		{
			Map<String, String> param = miDto.getVariableList();
			
			SampleVO sampleVO = new SampleVO();
			sampleVO.setId(param.get("selectedId"));
			
			System.out.println("selectedId ==================================>"+param.get("selectedId"));
			
			sampleService.deleteSample(sampleVO);
			
			mav.addObject("MiResultCode", "0");
			mav.addObject("MiResultMsg", "success");

		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject("MiResultCode", "-1");
			mav.addObject("MiResultMsg", e.toString());
		}
		return mav;
	}

	@RequestMapping(value = "/sample/egovSampleList.do")
	public String selectSampleList(@ModelAttribute("searchVO") SampleDefaultVO searchVO, ModelMap model)
	        throws Exception {

		/** EgovPropertyService.sample */
		searchVO.setPageUnit(propertiesService.getInt("pageUnit"));
		searchVO.setPageSize(propertiesService.getInt("pageSize"));

		/** pageing */
		PaginationInfo paginationInfo = new PaginationInfo();
		paginationInfo.setCurrentPageNo(searchVO.getPageIndex());
		paginationInfo.setRecordCountPerPage(searchVO.getPageUnit());
		paginationInfo.setPageSize(searchVO.getPageSize());

		searchVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
		searchVO.setLastIndex(paginationInfo.getLastRecordIndex());
		searchVO.setRecordCountPerPage(paginationInfo.getRecordCountPerPage());

		List sampleList = sampleService.selectSampleList(searchVO);
		model.addAttribute("resultList", sampleList);

		int totCnt = sampleService.selectSampleListTotCnt(searchVO);
		paginationInfo.setTotalRecordCount(totCnt);
		model.addAttribute("paginationInfo", paginationInfo);

		return "/sample/egovSampleList";
	}

	@RequestMapping("/sample/addSampleView.do")
	public String addSampleView(@ModelAttribute("searchVO") SampleDefaultVO searchVO, Model model) throws Exception {
		model.addAttribute("sampleVO", new SampleVO());
		return "/sample/egovSampleRegister";
	}

	@RequestMapping("/sample/addSample.do")
	public String addSample(SampleVO sampleVO, @ModelAttribute("searchVO") SampleDefaultVO searchVO,
	                        SessionStatus status) throws Exception {
		sampleService.insertSample(sampleVO);
		status.setComplete();
		return "forward:/sample/egovSampleList.do";
	}

	@RequestMapping("/sample/updateSampleView.do")
	public String updateSampleView(@RequestParam("selectedId") String id,
	                               @ModelAttribute("searchVO") SampleDefaultVO searchVO, Model model) throws Exception {
		SampleVO sampleVO = new SampleVO();
		sampleVO.setId(id);
		// 蹂��닔紐낆�� CoC �뿉 �뵲�씪 sampleVO
		model.addAttribute(selectSample(sampleVO, searchVO));
		return "/sample/egovSampleRegister";
	}

	@RequestMapping("/sample/selectSample.do")
	public @ModelAttribute("sampleVO")
	SampleVO selectSample(SampleVO sampleVO, @ModelAttribute("searchVO") SampleDefaultVO searchVO) throws Exception {
		return sampleService.selectSample(sampleVO);
	}

	@RequestMapping("/sample/updateSample.do")
	public String updateSample(SampleVO sampleVO, @ModelAttribute("searchVO") SampleDefaultVO searchVO,
	                           SessionStatus status) throws Exception {
		sampleService.updateSample(sampleVO);
		status.setComplete();
		return "forward:/sample/egovSampleList.do";
	}

	@RequestMapping("/sample/deleteSample.do")
	public String deleteSample(SampleVO sampleVO, @ModelAttribute("searchVO") SampleDefaultVO searchVO,
	                           SessionStatus status) throws Exception {
		sampleService.deleteSample(sampleVO);
		status.setComplete();
		return "forward:/sample/egovSampleList.do";
	}

}
