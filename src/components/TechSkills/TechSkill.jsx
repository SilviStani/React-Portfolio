import "./TechSkills.scss";
import {techSkill} from "./techskills.js";

export default function TechSkills() {
    return (
        <div className='introSkills'id="intro" >
            <div className="rightSkills">
                    <h3 className="h3">Tech Skills</h3>
                <div className="wrapperSkill">
                    {
                        techSkill.map((i) =>
                        <div className="spaceSkills" key={i.id}>
                            <img src={i.img} alt={i.alt} 
                            className="imagenesSkills"
                            id={i.id} title={i.title} />
                            <p className="p">{i.title}</p>
                        </div>    
                        )
                    }
                </div>
                <div className="wrapperSkill">
                    {
                        techSkill.map((i) =>
                        <div className="spaceSkills2" key={i.id}>
                            <p className="span">{i.title}</p>
                        </div>    
                        )
                    }
                </div>
            </div>
            <div className="left">
                <div className="imgContainerSkills">
                    <img src="assets/techSkill.png" alt="" />
                </div>
            </div>
        </div>
    )
}
