import Image from "next/image";

export default function Page() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <div className="contact-header-title">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="contact-body">
          <div className="contact-form">
            <form>
              <div className="contact-form-first-column">
                <div className="contact-form-input">
                  <div className="input-first-name">
                    <label htmlFor="name">First name *</label>
                    <input type="text" required />
                  </div>
                  <div className="input-last-name">
                    <label htmlFor="name">Last name *</label>
                    <input type="text" required />
                  </div>
                  <div className="input-email">
                    <label htmlFor="email">Email *</label>
                    <input type="email" required />
                  </div>
                  <div className="input-telephone">
                    <label htmlFor="telephone">Telephone</label>
                    <input type="tel" />
                  </div>
                </div>
              </div>
              <div className="contact-form-second-column">
                <div className="input-message">
                  <label htmlFor="message">Message *</label>
                  <textarea rows="10" required></textarea>
                </div>
                <div className="input-submit">
                  <button type="submit">Send</button>
                </div>
              </div>
              <div className="contact-form-third-column">
                <div className="contact-image">
                  <Image
                    src={"/images/birch_forest.jpg"}
                    width={500}
                    height={500}
                    alt="Birch Forest"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
