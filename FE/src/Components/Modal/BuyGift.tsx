import React, { useEffect, useState } from "react";
import style from "./BuyGift.module.css"

interface Props {
  closemodal : any;
}

export default function BuyGift({closemodal} : Props){
  
  const [point] = useState(4500)
  const [price] = useState(4500)

  useEffect(() => {
    let active = false;
    let currentX: number;
    let initialX: number;
    let xOffset = 0
    
    const dragItem = document.querySelector("#slidebtn")
    const container = document.querySelector("#slide")

    const dragStart = (e: any) => {
      if(e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
      }
      else {
        initialX = e.clientX - xOffset;
      }

      if(e.target === dragItem){
        active = true
      }
    }
  
    const dragEnd = (e:any) => {
      
      if(currentX < 130) {
        setTranslate(0, dragItem)
        xOffset = 0
      }
      else if (currentX >= 130) {
        setTranslate(170, dragItem)
        xOffset = 170
      }

      initialX = currentX;

      if(xOffset=== 170 ){
        container?.setAttribute('class', style.buygift)
      }
      else {
        container?.setAttribute('class', style.slider)
      }

      active = false
    }
  
    const drag = (e:any) => {
      if(active) {
        e.preventDefault()
  
        if(e.type === "touchmove"){
          currentX = e.touches[0].clientX - initialX;
        }
        else {
          currentX = e.clientX - initialX;
        }
  
        xOffset = currentX;
        
        setTranslate(currentX, dragItem)
      }
    }
  
    const setTranslate = (xPos :number, el: Element | null) => {
      let x = xPos
      if(xPos < 0){
        x = 0
      } 
      else if(xPos >= 170) {
        x = 170
      }

      el?.setAttribute("style", `transform : translatex(${  x  }px)`)

    }

    if(point >= price ) {
      container?.addEventListener("touchstart", dragStart, false)
      container?.addEventListener("touchend", dragEnd, false)
      container?.addEventListener("touchmove", drag, false)
    
      container?.addEventListener("mousedown", dragStart, false)
      container?.addEventListener("mouseup", dragEnd, false)
      container?.addEventListener("mousemove", drag, false)
    }
    
  }, [point, price])


  return (
    <div>
      <div className={style.exitbtn}>
        <button type="button" className="flex" onClick={() => closemodal()}>
            X
        </button>
      </div>
      <div className={style.giftimage}>
        <img src="./tmpFile/tmp.jpg" alt="giftcon"/>
      </div>
      <div className={style.gifttitle}>시워언한 아이스티 복숭아</div>
      <div className={style.point}>
        보유한 포인트 :
        <span>{point}</span>
      </div>

      <div className={style.slider} id="slide">
        <div className={style.moveslider} id="slidebtn">4500</div>
        {point >= price ? <span>밀어서 교환하기</span> : <span>포인트가 부족합니다</span>}
        
      </div>
    </div>
  )
}