import React from 'react';

const dummyInvitations = [
    { id: 1, name: "Alice Johnson", headline: "Software Engineer at Google", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Mark Thompson", headline: "Product Manager at Amazon", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, name: "Sophia Brown", headline: "UI/UX Designer at Adobe", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 4, name: "Liam Wilson", headline: "Data Scientist at Tesla", image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 5, name: "Olivia Martin", headline: "Marketing Specialist at Airbnb", image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { id: 6, name: "Ethan Carter", headline: "Cybersecurity Analyst at IBM", image: "https://randomuser.me/api/portraits/men/6.jpg" }
];

const NetworkPageMainPanel = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f3f2ef', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
                <p style={{ cursor: 'pointer', fontWeight: 'bold', color: '#555' }}>Grow</p>
                <p style={{ cursor: 'pointer', fontWeight: 'bold', color: '#555' }}>Catch up</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#fff', marginTop: '10px', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Pending Invitations</p>
                <div style={{ color: '#0073b1', cursor: 'pointer' }}>Manage</div>
            </div>
            <div style={{ marginTop: '20px' }}>
                {dummyInvitations.length > 0 ? (
                    dummyInvitations.map((invite) => (
                        <div key={invite.id} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            <img src={invite.image} alt={invite.name} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} />
                            <div style={{ flex: 1 }}>
                                <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{invite.name}</h2>
                                <p style={{ fontSize: '14px', color: '#555' }}>{invite.headline}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button style={{ backgroundColor: '#0073b1', color: 'white', padding: '8px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Accept</button>
                                <button style={{ backgroundColor: '#ddd', color: '#333', padding: '8px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Ignore</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ color: '#555' }}>No pending invitations</p>
                )}
            </div>
        </div>
    );
};

export default NetworkPageMainPanel;
