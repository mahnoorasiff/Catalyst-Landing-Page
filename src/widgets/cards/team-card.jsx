import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name}) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={name}
        size="xl"
        variant="square"
        className="h-full w-full shadow-lg shadow-gray-500/25 brightness-50 hover:brightness-100 scale-95 hover:scale-105"
      />
      <div className="h-full w-full shadow-lg shadow-gray-500/25 p-4 bg-gray-600">
      <Typography variant="h5" color="white" className="mt-2 mb-1">
        {name}
      </Typography>
   
      </div>
     
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
