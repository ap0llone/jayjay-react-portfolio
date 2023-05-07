import React from "react";

interface Props {
    text: string;
    icon?: string;
    href: string;
}

const SecondaryButton: React.FC<Props> = ({ text, icon, href }) => {
    return (
        <a href={href} className="secondary-btn">
            {text} <img src={icon} alt="Icon" />
        </a>
    );
};

export default SecondaryButton;
