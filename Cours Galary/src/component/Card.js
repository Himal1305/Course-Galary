import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

export default function Card(props) {
  let courses = props.course.data;
  let catagarey = props.catagarey;
  let allcouser = [];
  let [likecont, setlikecont] = useState([]);
  //   let [like ,setlike]=useState(true);
  let like = [];

  function likehandelar(ev) {
    let add = ev.currentTarget.id;
    if (likecont.includes(ev.currentTarget.id)) {
      let ab = likecont.filter((data) => {
        
        return (data != ev.currentTarget.id);
      });
      setlikecont(ab)
    }
    else{
    setlikecont((prev) => [...prev, add]);
    }  
}

  if (courses) {
    if (catagarey == "All") {
      Object.values(courses).forEach((array) => {
        array.forEach((coursedata) => {
          allcouser.push(coursedata);
        });
      });
    } else {
      for (let key in courses) {
        if (key == catagarey) {
          let selelctcat = courses[key];
          selelctcat.forEach((coursedata) => {
            allcouser.push(coursedata);
          });
        }
      }
    }
  } else {
    console.log("eror");
  }
  return (
    <div className=" w-[100%]  px-20 py-3 gap-4 space-y-2 justify-around bg-blue-200 flex flex-wrap">
      {allcouser.map((c) => {
        return (
          <div key={c.id} className=" px-3 bg-blue-900 rounded-md  py-2 w-[30%] flex flex-col justify-items-start items-center " >
            <div  className=" relative">
              <img className="h-[140px] rounded-md mt-3" src={c.image.url} alt="" />
              <button className="text-[30px] absolute    right-2" id={c.id} onClick={likehandelar}>
                {likecont.includes(c.id) ? <FcLike /> : <FcLikePlaceholder />}
              </button>
            </div>
            <div className=" mt-7 py-2 flex flex-col justify-start items-start" >
              <h4 className="text-white px-2 font-bold">{c.title}</h4>
              <p className="w-60 px-2 text-gray-300 ">{c.description.slice(0,100)}<span className="text-white">...READ MORE</span></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
