import React from "react";

interface Props {
    text: string;
    icon?: string;
    href?: string;
}

const PrimaryButton: React.FC<Props> = ({ text, icon, href }) => {
    return (
        <a href={href} className="primary-btn">
            {text} <img src={icon} alt="Icon" />
        </a>
    );
};

export default PrimaryButton;
