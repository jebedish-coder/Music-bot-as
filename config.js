module.exports = {
    app: {
        token: 'MTAzMDY4MjIwMTAzNTExMjUyOA.G097Xa.b7MRqBnBX-IUGgarMVvP6SBO0fx5sSDIqTlxmE',
        playing: 'by Zerio ❤️',
        global: true,
        guild: '763018726257066015'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
