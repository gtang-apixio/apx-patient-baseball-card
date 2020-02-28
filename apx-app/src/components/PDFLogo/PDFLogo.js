import React from "react";
import "./PDFLogo.css";

function PDFLogo(props) {
  return (
    <a href={props.link} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
        className="pdf-logo"
      >
        <g>
          <path d="M85.414,28.586l-22-22C63.039,6.211,62.53,6,62,6H16c-1.104,0-2,0.896-2,2v84c0,1.104,0.896,2,2,2h68c1.104,0,2-0.896,2-2   V30C86,29.47,85.789,28.961,85.414,28.586z M64,12.828L79.171,28H64V12.828z M18,90V10h42v20c0,1.104,0.896,2,2,2h20v58H18z" />
          <path
            fill="#0053a6"
            d="M34.65,80.738c-1.13,0-2.186-0.445-3.064-1.324c-2.276-2.276-2.499-5.083-0.594-7.507   c1.94-2.47,6.408-4.672,11.683-6.277c0.596-1.3,1.174-2.671,1.721-4.089c0.625-1.621,1.182-3.229,1.666-4.796   c-3.83-6.38-6.231-12.976-5.296-16.77c0.675-2.737,2.846-4.185,5.956-3.97c0.013,0,0.025,0.001,0.038,0.003   c1.567,0.137,4.332,1.021,5.234,5.394c0.74,3.588,0.014,9.024-1.569,14.717c1.58,2.467,3.367,4.886,5.216,7.002   c5.594-0.488,10.637-0.092,13.314,1.535c2.292,1.394,2.99,3.701,1.867,6.171c-0.044,0.099-0.097,0.192-0.156,0.282   c-1.964,2.946-5.211,3.704-8.903,2.076c-2.451-1.08-5.108-3.181-7.685-5.853c-2.814,0.337-5.756,0.878-8.511,1.585   c-2.625,5.343-5.667,9.65-8.44,11.146C36.288,80.515,35.45,80.738,34.65,80.738z M40.076,70.666   c-2.708,1.073-4.854,2.331-5.939,3.712c-0.576,0.732-0.681,1.25,0.277,2.208c0.155,0.154,0.257,0.255,0.813-0.043   C36.589,75.808,38.319,73.664,40.076,70.666z M59.46,66.944c1.341,1.138,2.663,2.03,3.913,2.58   c2.532,1.117,3.435,0.132,3.868-0.494c0.223-0.535,0.12-0.66-0.366-0.956C65.488,67.23,62.773,66.887,59.46,66.944z M48.871,61.025   c-0.396,1.121-0.819,2.233-1.264,3.327c1.094-0.238,2.2-0.449,3.304-0.631C50.212,62.85,49.531,61.948,48.871,61.025z    M46.098,39.982c-1.216,0-1.345,0.523-1.45,0.95c-0.509,2.067,0.714,5.92,2.881,10.165c0.758-3.677,0.974-6.815,0.546-8.886   c-0.428-2.074-1.268-2.183-1.646-2.216C46.311,39.986,46.201,39.982,46.098,39.982z"
          />
        </g>
      </svg>
    </a>
  );
}

export default PDFLogo;