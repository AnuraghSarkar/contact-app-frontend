import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="formbcg">
      <div className="form-inner">
        <span className="contact_header">ADD CONTACT</span>
        <hr className="underline" />
        <form>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div className="field" style={{ marginBottom: "20px" }}>
            <label>Phone no.</label>
            <input type="number" name="phone" />
          </div>

          <label class="label_image">Profile image</label>
          <div className="image_outer">
            <div className="img_upload">
              <input type="file" id="upload_file" name="" />
              UPLOAD IMAGE
            </div>
          </div>

          <div className="field">
            <input
              type="submit"
              name="submit"
              value="ADD CONTACT"
              className="submit_btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
