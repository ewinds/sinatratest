# Initialize your app
zhe = new Framework7()

# Export selectors engine
$$ = Dom7

# Add views
view1 = zhe.addView("#view-1")
view2 = zhe.addView("#view-2",
  
  # Because we use fixed-through navbar we can enable dynamic navbar
  dynamicNavbar: true
)
view3 = zhe.addView("#view-3")
view4 = zhe.addView("#view-4")
mySlider = zhe.slider(".slider-container",
  speed: 400
  loop: true
  autoplay: 3000
  pagination: ".slider-pagination"
)

# 下拉刷新页面
ptrContent = $$(".pull-to-refresh-content")

# 添加'refresh'监听器
ptrContent.on "refresh", (e) ->
  
  # 模拟2s的加载过程
  setTimeout (->
    
    # 加载完毕需要重置
    zhe.pullToRefreshDone()
    return
  ), 2000
