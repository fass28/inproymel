import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WhatsApp.css";

export const WhatsApp = () => {
  return (
    <section >
        <div className="whatsapp-text">
            <strong>Contáctanos !</strong>
        </div>
      <div className="whatsApp" id="whatsApp">
        <a href="https://wa.me/51934862130"   target="_blank" className="whatsapp-icon">
          <FontAwesomeIcon
            icon={["fab", "whatsapp"]}
            className="whatsapp-icon"
          />{" "}
        </a>
      </div>
    </section>
  );
};
