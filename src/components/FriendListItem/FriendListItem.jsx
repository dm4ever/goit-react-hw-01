import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.friendListItem}>
            <img className={css.avatarItem} src={avatar} alt="Avatar" width="48" />
            <p className={css.nameItem}>{name}</p>
        <p className={css.statusItem}>${'status'}</p>
        </div>
    )
};