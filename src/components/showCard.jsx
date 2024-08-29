import html2canvas from "html2canvas";
import { useRef } from "react";

const ShowCard = ({ data }) => {
  const cardRef = useRef();

  if (!data) return null;

  const handleDownload = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${data.name}_ID_Card.png`;
      link.click();
    });
  };

  return (
    <div>
      <div className="id-card" ref={cardRef}>
        <div className="id-card-content">
          <div className="id-photo-container">
            {data.photo && (
              <img
                src={URL.createObjectURL(data.photo)}
                alt="Employee Photo"
                className="id-photo"
              />
            )}
          </div>
          <div className="id-info">
            <h2>Enterprise Name</h2>
            <p>
              <strong>Name:</strong> {data.name}
            </p>
            <p>
              <strong>Designation:</strong> {data.designation}
            </p>
            <p>
              <strong>Employee ID:</strong> {data.employeeId}
            </p>
          </div>
        </div>
      </div>
      <br />
      <p>Now it's time to download your card</p>
      <button onClick={handleDownload} className="download-button">
        Download Card
      </button>
    </div>
  );
};
export default ShowCard;
