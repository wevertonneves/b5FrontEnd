interface ProfileCardProps {
  photoUrl: string;
  name: string;
  description: string;
}

function ProfileCard({ photoUrl, name, description }: ProfileCardProps) {
  return (
    <div className="card">
      <img src={photoUrl} alt={name} className="cardPhoto" />
      <h2 className="cardName">{name}</h2>
      <p className="cardDescription">{description}</p>
    </div>
  );
}

export default ProfileCard;
