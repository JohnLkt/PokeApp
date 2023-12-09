export function InfoBox({ heading, text }) {
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow p-5 mx-auto absolute sm:mt-0 sm:top-1/3 right-1/2 translate-x-1/2 translate-y-1/2 text-center">
      <p className="font-semibold">{heading}</p>
      <p>{text}</p>
    </div>
  );
}

export default InfoBox;
