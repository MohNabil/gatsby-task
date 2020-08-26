import React from "react"
import { Layout } from "../components/Layout/Layout"
import "../styles/postForm.scss"
import { MyUploader } from "../components/DropZone/DropZone"
import { Input } from "../components/FormInput/Input"
import { Pill } from "../components/Pill/Pill"

const PostForm = () => {
  return (
    <Layout>
      <div className="pf-container">
        <h1 className="title">
          <span className="title-span">
            Post your Real State - rent, buy, sell
          </span>
        </h1>
        <form action="#" method="POST">
          <div className="property-photos">
            <h3>Property Photos</h3>
            <MyUploader />
          </div>
          <div className="basic-info">
            <h3>Basic Information</h3>
            <div className="input-container">
              <Input label="Type" optionValue={["sale", "rent"]} />
              <Input label="Handled By" optionValue={["owner", "agent"]} />
            </div>
            <div className="input-container">
              <Input label="Title" inputType="input" typeAttr="text" />
              <Input label="Price" inputType="input" typeAttr="text" />
            </div>
            <div className="input-container">
              <Input label="Description" inputType="textarea" />
            </div>
          </div>
          <div className="location-info">
            <h3>Location Information</h3>
            <div className="input-container">
              <Input label="Country" optionValue={["india", "egypt", "usa"]} />
              <Input
                label="Area"
                optionValue={["mumbai", "cairo", "california"]}
              />
            </div>
            <div className="input-container">
              <Input
                label="Address"
                inputType="input"
                typeAttr="text"
                single={true}
              />
            </div>
          </div>
          <div className="size-info">
            <h3>Size Details</h3>
            <div className="input-container">
              <Input label="Living Area" inputType="input" typeAttr="text" />
              <Input label="Garden Area" inputType="input" typeAttr="text" />
            </div>
            <div className="input-container">
              <Input label="No of Rooms" optionValue={[2, 3, 4]} />
              <Input label="No of Bathrooms" optionValue={[1, 2, 3]} />
            </div>
          </div>
          <div className="additional-info">
            <input type="checkbox" className="checkbox" id="main-checkbox" />
            <label className="cb-label" htmlFor="main-checkbox">
              Additional Information
            </label>
            <div className="content">
              <h4>Garages</h4>
              <div className="pill-container">
                <Pill text="Garage" />
                <Pill text="Car Park" />
                <Pill text="Box" />
                <Pill text="Indoor Location" />
                <Pill text="Open Parking" />
              </div>
              <h4>Comfort Facilities</h4>
              <div className="pill-container">
                <Pill text="Elevator" />
                <Pill text="Jacuzzi" />
                <Pill text="Shower" />
                <Pill text="Sauna" />
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button>Publish</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default PostForm
