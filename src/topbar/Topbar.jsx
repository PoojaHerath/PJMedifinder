import "./topbar.css";
//import Logo1 from '//Logo1.png';

export default function Topbar() {
  return (
    <div className="top">
        <div>
            <img
            className="logo"
            src="https://www.abclinicalresearch.com/wp-content/uploads/2019/11/Icon-Clinical-Trials.png" alt="" />
        </div>
        <div> 
            <text className="name"> Medifinder</text>
        </div>
        <div
        style={{
          background: 'black',
          height: '3px',
        }}
      />
    </div>
    
  );
};
