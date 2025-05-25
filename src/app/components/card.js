// Write a react componet that creates a card with a title, description and an image. The card should be responsive and have a hover effect that scales the image. The card should also have a button that links to a different page. Use tailwind css for styling.

const Card = ({ title, description, imageUrl, buttonText, buttonLink }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <a
            href={buttonLink}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            {buttonText}
            </a>
        </div>
        </div>
    );
    }
export default Card;
// This code creates a responsive card component using React and Tailwind CSS. The card includes an image, title, description, and a button that links to a different page. The card has a hover effect that scales the image when hovered over.