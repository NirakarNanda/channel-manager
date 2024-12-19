import React from 'react';

type CardProps = {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  descriptionColor?: string;
  valueColor?: string;
  cardBgColor?: string;
  onClick?: () => void;
};

const statCard: React.FC<CardProps> = ({
  title,
  value,
  description,
  icon,
  iconColor = 'purple',
  descriptionColor = 'green',
  valueColor = 'black',
  cardBgColor = 'white',
  onClick,
}) => {
  return (
    <div
      className="rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 cursor-pointer"
      style={{ backgroundColor: cardBgColor }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-2xl font-bold" style={{ color: valueColor }}>
            {value}
          </h2>
          {description && (
            <p className="text-sm mt-2" style={{ color: descriptionColor }}>
              {description}
            </p>
          )}
        </div>
        {icon && (
          <div
            className="flex justify-center items-center rounded-full w-12 h-12"
            style={{ backgroundColor: `${iconColor}20` }}
          >
            <span className="text-lg" style={{ color: iconColor }}>
              {icon}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default statCard;
