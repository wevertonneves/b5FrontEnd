
import React from 'react';
import styles from './ProfileCard.module.css';

type ProfileCardProps = {
  photoUrl: string;
  name: string;
  description: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ photoUrl, name, description }) => {
  return (
    <div className={styles.card}>
      <img src={photoUrl} alt={name} className={styles.photo} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProfileCard;
