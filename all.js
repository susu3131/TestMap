$(document).ready(function () {
  let scale = 1;
  let zoomStep = 0.1;

  //11111111111111111111111111111111111
  //滾動
  $("#MRT-Wheel1").on("wheel", function (event) {
    event.preventDefault();

    //調整縮小放大
    if (event.originalEvent.deltaY < 0) {
      scale += zoomStep;
    } else {
      scale -= zoomStep;
    }

    // 限制縮放比例
    scale = Math.max(0.5, Math.min(2, scale)); // 限制缩放范围为 0.5 到 2 倍

    // 更新背景的缩放
    $("#MRT1").css("transform", "scale(" + scale + ")");
  });

  //拖拉
  $("#MRT1").on("mousedown", function (event) {
    event.preventDefault();
    // 記錄按下時間
    let pressStartTime = Date.now();
    // 設定長按時間 (500 毫秒)
    let pressDuration = 500;

    //座標
    let startX = event.clientX;
    let startY = event.clientY;
    let offsetX = $(this).offset().left;
    let offsetY = $(this).offset().top;

    //滑鼠移動
    $(document).on("mousemove", function (event) {
      let newLeft = offsetX + event.clientX - startX;
      let newTop = offsetY + event.clientY - startY;
      // 更新位置
      $("#MRT1").css({
        left: newLeft + "px",
        top: newTop + "px",
      });
    });

    // 停止拖動
    $(document).on("mouseup", function () {
      console.log("放開");
      // 移除拖動和停止事件
      $(document).off("mousemove mouseup");
    });
  });

  //22222222222222222222222222222222222222222
  $("#MRT-Wheel2").on("wheel", function (event) {
    event.preventDefault();
  });
  //區域放大縮小
  $("#Tamsui2").on("click", function () {
    event.stopPropagation();
    $("#MRT2").css("transform", "scale(1.8) translate(200px, 300px)");
  });

  $(document).on("click", function () {
    $("#MRT2").css("transform", "scale(1) translate(0px, 0px)");
  });

  //333333333333333333333333333333333333333333
  // 監聽滾動事件
  $("#MRT-Wheel3").on("wheel", function (event) {
    event.preventDefault();

    //調整縮小放大
    if (event.originalEvent.deltaY < 0) {
      scale += zoomStep;
    } else {
      scale -= zoomStep;
    }

    // 限制縮放比例
    scale = Math.max(0.5, Math.min(2, scale)); // 限制缩放范围为 0.5 到 2 倍

    // 更新背景的缩放
    $("#MRT3").css("transform", "scale(" + scale + ")");
    $("#Tamsui3").css("transform", "scale(" + scale + ")");
  });

  //拖拉
  $("#MRT3").on("mousedown", function (event) {
    event.preventDefault();
    console.log("按下");
    //座標
    let startX = event.clientX;
    let startY = event.clientY;
    let offsetX = $(this).offset().left;
    let offsetY = $(this).offset().top;

    //滑鼠移動
    $(document).on("mousemove", function (event) {
      let newLeft = offsetX + event.clientX - startX;
      let newTop = offsetY + event.clientY - startY;
      // 更新位置
      $("#MRT3").css({
        left: newLeft + "px",
        top: newTop + "px",
      });
      $("#Tamsui3").css({
        left: newLeft + "px",
        top: newTop + "px",
      });
    });

    // 停止拖動
    $(document).on("mouseup", function () {
      console.log("放開");
      // 移除拖動和停止事件
      $(document).off("mousemove mouseup");
    });
  });

  //區域放大縮小
  $("#Tamsui3").on("click", function () {
    event.stopPropagation();
    $("#MRT3").css("transform", "scale(1.8) translate(200px, 300px)");
    $("#Tamsui3").css("transform", "scale(1.8) translate(200px, 300px)");
  });
  $(document).on("click", function () {
    console.log("點其他的");
    $("#MRT3").css("transform", "scale(1) translate(0px, 0px)");
    $("#Tamsui3").css("transform", "scale(1) translate(0px, 0px)");
  });
});
