(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_grd_move" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px dotted #ff8e7c"),
            									"color" : nexacro.ColorObject("#d8351a"),
            									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\""),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_excel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("bold 11pt \"Malgun Gothic\",\"Arial\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 32px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_hancel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("bold 11pt \"Malgun Gothic\",\"Arial\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 32px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_cellMoveBox" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #ff8e7c")
            								}
            							}
            						}
            					}
            				]
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_excel" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #333333, 0px none, 0px none, 0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #333333, 0px none, 0px none, 0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #333333, 0px none, 0px none, 0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_red" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d8351a, 0px none, 0px none, 0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d8351a, 0px none, 0px none, 0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d8351a, 0px none, 0px none, 0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_cellMove" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_dynamic" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"grd_excel" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Arial\""),
            															"border" : nexacro.BorderObject("1px solid #cbcbcb")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Arial\""),
            															"border" : nexacro.BorderObject("1px solid #cbcbcb")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Arial\""),
            															"border" : nexacro.BorderObject("1px solid #cbcbcb")
            														},
            														"selected" :
            														{
            														},
            														"mouseover_selected" :
            														{
            														},
            														"focused_selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_red" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#d8351a"),
            															"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Arial\""),
            															"border" : nexacro.BorderObject("1px solid #ff6c54")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#d8351a"),
            															"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Arial\""),
            															"border" : nexacro.BorderObject("1px solid #ff6c54")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#d8351a"),
            															"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Arial\""),
            															"border" : nexacro.BorderObject("1px solid #ff6c54")
            														},
            														"selected" :
            														{
            														},
            														"mouseover_selected" :
            														{
            														},
            														"focused_selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_cellMove" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("0px none,1px solid #dddddd")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("0px none,1px solid #dddddd")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("0px none,1px solid #dddddd")
            														}
            													}
            												}
            											},
            											{
            												"grd_dynamic" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											},
            											{
            												"grd_tree" :
            												{
            													"self" :
            													{
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"grd_excel" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#222222")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#f55136")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#f55136")
            														},
            														"mouseover_selected" :
            														{
            															"color" : nexacro.ColorObject("#f55136")
            														},
            														"focused_selected" :
            														{
            															"color" : nexacro.ColorObject("#f55136")
            														}
            													}
            												}
            											},
            											{
            												"grd_red" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("1px solid #9c9c9c")
            														},
            														"focused_selected" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("1px solid #9c9c9c")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#222222")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#6e6e63")
            														},
            														"disabled_selected" :
            														{
            															"color" : nexacro.ColorObject("#6e6e63")
            														}
            													}
            												}
            											},
            											{
            												"grd_cellMove" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#f55136"),
            															"border" : nexacro.BorderObject("1px solid #9c9c9c")
            														},
            														"focused_selected" :
            														{
            															"color" : nexacro.ColorObject("#f55136"),
            															"border" : nexacro.BorderObject("1px solid #9c9c9c")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#222222")
            														}
            													}
            												}
            											},
            											{
            												"grd_dynamic" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"edge" : nexacro.EdgeImageObject("url('imagerc::img_grd_Dynamic.png') 15px 15px"),
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"focused" :
            														{
            															"edge" : nexacro.EdgeImageObject("url('imagerc::img_grd_Dynamic.png') 15px 15px"),
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"selected" :
            														{
            															"edge" : nexacro.EdgeImageObject("url('imagerc::img_grd_Dynamic_S.png') 15px 15px"),
            															"color" : nexacro.ColorObject("#d8351a"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"focused_selected" :
            														{
            															"edge" : nexacro.EdgeImageObject("url('imagerc::img_grd_Dynamic_S.png') 15px 15px"),
            															"color" : nexacro.ColorObject("#d8351a"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"mouseover" :
            														{
            															"edge" : nexacro.EdgeImageObject("url('imagerc::img_grd_Dynamic_O.png') 15px 15px")
            														}
            													}
            												}
            											},
            											{
            												"grd_tree" :
            												{
            													"self" :
            													{
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"grd_tree" :
            												{
            													"self" :
            													{
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_red" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_cellMove" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_dynamic" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Grid" :
            			{
            				"class" :
            				[
            					{
            						"grd_dynamic" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222")
            								}
            							}
            						}
            					},
            					{
            						"grd_tree" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            									"color" : nexacro.ColorObject("#222222")
            								}
            							}
            						}
            					}
            				]
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_dynamic" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"class" :
            								[
            									{
            										"grd_dynamic" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"class" :
            								[
            									{
            										"grd_dynamic" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_tree" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeCollapse.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeExpand.png')")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_tree" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeClose.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeOpen.png')")
            																		},
            																		"enabled" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeItem.png')")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
