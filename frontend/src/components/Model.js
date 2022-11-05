import "../styles/model.css"
import {useState} from "react"
// import { UserAuth } from "../context/AuthContext"

export default function Model() {
    const [formData, setFormData] = useState({
      slidoName: "",
      startDate: "",
      endDate: ""
    })

    const submit = async (e) => {
      e.preventDefault()
      alert(":submitted")
      const res = await fetch("http://localhost:5000/slido/createSlido", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const json = await res.json()

      if(!res.ok) {
        console.log(json.error)
      } 
      
      if (res.ok) {
        console.log(formData)
        console.log("added", json)
        setFormData({
          slidoName: "",
          startDate: "",
          endDate: ""
        })
      }
    }

    
    const inputEvent = (e) => {
      const value = e.target.value
      const name = e.target.name

      setFormData((prev) => {
        if(name === "slidoName"){
          return {
            slidoName: value,
            startDate: prev.startDate,
            endDate: prev.endDate
          }
        } else if(name === "startDate"){
          return {
            slidoName: prev.slidoName,
            startDate: value,
            endDate: prev.endDate
          }
        } else if(name === "endDate"){
          return {
            slidoName: prev.slidoName,
            startDate: prev.startDate,
            endDate: value
          }
        }
      })
    }

    const exit = (e) => {
        e.preventDefault()
        document.querySelector(".backdrop").style.display = "none"
    }
  return (
    <section className="model">
      <h3 className="modelChildren">When do you want to use this Slido ??</h3>
      <form>
        <div className="modelChildren" id="dates">
          <div className="modelChildren">
            <label className="modelChildren">Start Date: </label>
            <input className="modelChildren" name="startDate" value={formData.startDate} type={"date"} onChange={inputEvent}/>
          </div>
          <div className="modelChildren">
            <label className="modelChildren">End Date: </label>
            <input className="modelChildren" name="endDate" value={formData.endDate}  type={"date"} onChange={inputEvent}/>
          </div>
        </div>
        <div className="modelChildren">
          <label className="modelChildren">Give Your Slido Name: </label>
          <input className="modelChildren" type={"text"} value={formData.slidoName} name="slidoName" onChange={inputEvent}/>
        </div>
        <div className="modelChildren" id="submit">
            <div className="modelChildren" id="info">
                <p>Anyone with the code or link can participate</p>
            </div>
            <div className="modelChildren" id="buttons">
                <button onClick={exit}>Cancel</button>
                <button onClick={submit} type="submit">Create Slido</button>
            </div>
        </div>
      </form>
    </section>
  );
}
