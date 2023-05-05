import mobilePhone from "../images/counter-1.png";
import { useState, useEffect } from "react";
import ProofNum from "./ProofNum";
import Visitors from "./Visotors";
import Reviews from "./Reviews";
import globe from '../images/web-removebg-preview.png'
import people from '../images/people-removebg-preview.png'
import box from '../images/box.png'
import emoji from '../images/emoji-removebg-preview.png'
function ProofSection() {
  const [downloads, setDownloads] = useState(0);
  const [members, setMembers] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDownloads((prevNum) => prevNum + 1);
    }, 10);
    if (downloads === 128 ) {
      clearTimeout(timer);
    }
  }, [downloads]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setMembers((prevNum) => prevNum + 1);
    }, 10);
    if (members === 75 ) {
      clearTimeout(timer);
    }
  }, [members]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setReviews((prevNum) => prevNum + 1);
     
    }, 10);
    if (reviews === 2560 ) {
      clearTimeout(timer);
    }
  }, [reviews]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setVisitors((prevNum) => prevNum + 1);
    }, 10);
    if (visitors === 44 ) {
      clearTimeout(timer);
    }
  }, [visitors]);

  return (
    <section className="bg-neutral-100 px-24 py-20 flex justify-center items-center flex-col md:flex-row">
      <div className="w-full md:w-6/12">
        <img src={mobilePhone}></img>
      </div>
      <div className="w-full md:w-6/12">
        <p className="text-center text-2xl text-gray-500 py-14 md:text-left ">
          Morbi sed faucibus urna mi aenean erat turpis, iaculis at ultricis
          eget, malesuada sed sociosqu class aptent taciti turpis litora.
        </p>
        <div className="grid justify-center content-center md:grid-cols-2">
          <ProofNum numbers={downloads} photo={globe} text="DOWNLOADS"/>
          <ProofNum numbers={members} photo={emoji} text="MEMBERS" />
          <Reviews numbers={reviews} photo={box} text="REVIEWS"/>
          <Visitors numbers={visitors} photo={people} text="VISITORS"/>
        </div>
      </div>
    </section>
  );
}

export default ProofSection;
