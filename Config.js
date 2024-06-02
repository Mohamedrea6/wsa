/* 
    {user} = user name
    {channel} = channel name
    {id} = Ticket ID
    {section} = Section name
    {guild} = Guild name
    {useravatar} = user avatar
    {guildavatar} = guild avatar
*/



module.exports = {
    MoConfig: {
        Bot: { /* أعدادات البوت الأساسية */
            License: "R31Klb2e3qPOELphxI4jDsQ", // رخصتك
            Token: "", // توكن البوت
            ClientId: "", // أيدي اليوت
            Prefix: "$", // بريفكس البوت
            presences: [ /* أعدادات حالة البوت تقدر تضيف أكثر من حالة وهو كل شوي بيغير حالة البوت */
                { type: 'LISTENING', message: 'فليكس ستور' },
                { type: 'LISTENING', message: 'Flix Store' }
            ]
        },
        DataBase: { /* أعدادات قاعدة البيانات */
            host : 'localhost',
            port : 3306,
            user : 'root',
            password : '',
            database : 'my'
        },
        Tickets: [  /* التكتات */
            {
                label: "المتجر", // أسم التكت
                style: 2, // شكل الزر https://prnt.sc/26f4w66
                emoji: '🛒', // الأيموجي    
                /* Setting For This ticket */
                name: '' ,
                logchannel: "", // ايدي روم اللوقات
                opencategory: "", // أيدي الكاتجوري إلي بينفتح فيه التكت
                closecategory: "", // أيدي الكاتجوري إلي بيتكسر فيه التكت
                Team: [], // أيديات الرتب إلي تبيها تشوف التكت
                content: "**تيكت شراء [||<@607651037435789328> <@413093485608960001> {mention} ||]**", // الرسالة العادية إلي بتوصل مع الأيمبد فالتكت || {user} يمنشن الشخص إلي فاتح التكتس
                Embed: { // اعداداات الإيمبد اول ما الشخص يفتح تكت
                    title: "قائمة بجميع السكربتات والاسعار",
                    description: ``,
                    color: "#F97B0C", // لون الأيمبد
                    author: {
                        name: "{user}",
                        url: "",
                        icon_url: "{useravatar}"
                    },
                    fields: [
                        {
                            name: '**المستخدم [👤]**',
                            value: `{mention}`,
                            inline: true
                        },
                        {
                            name: '**رقم التذكرة [📝]**',
                            value: `\`{id}\``,
                            inline: true
                        }
                    ],
                    thumbnail: {
                        url: ""
                    },
                    image: {
                        url: ""
                    },
                    footer: {
                        text: "Flix Store",
                        icon_url: "{guildavatar}"
                    },
                    timestamp: new Date(),
                }
            }
        ],
        Settings: { /* أعدادات البوت العامة */
            Admins: [""], // الأشخاص إلي يقدرون يستخدمون أمر الإعداد
            MainEmbed: {
                title: "تتيح لك القائمة أختيار نوع التذكرة المطلوب",
                description: `نظام التكتات`,
                color: "#2f3136", // لون الأيمبد
                author: {
                    name: "",
                    icon_url: ""
                },
                fields: [],
                thumbnail: {
                    url: ""
                },
                image: {
                    url: ""
                },
                footer: {
                    text: "{guild}",
                    icon_url: "{guildavatar}"
                },
                timestamp: new Date(),
            },
            Transcript: { /* أعدادات الترانسكربت (حفظ التكت) */
                Status: true, // اذا تبيه شغال خله مثل ماهو تبي تطفيه خليه false
                LogChannel: "" // الروم إلي بينرسل عليه الترانسكربت
            },
            Cliame: {
                Role: [""], // الرتب إلي بتقدر تستلم التكت
            },
            Commands: { /* الأوامر إلي موجودة بالبوت */
                tickets: { /* أوامر التكتات */

                    add: { /* أمر أضافة شخص للتكت */
                        Status: true, // اذا تبيه شغال خله مثل ماهو تبي تطفيه خليه false
                        Role: [""], // الرتبة إلي تبيها تستخدم الأمر
                    },
                    Remove: {
                        Status: true, // اذا تبيه شغال خله مثل ماهو تبي تطفيه خليه false
                        Role: [""], // الرتبة إلي تبيها تستخدم الأمر
                    },
                    close: {
                        Status: true, // اذا تبيه شغال خله مثل ماهو تبي تطفيه خليه false
                    },
                    Delete: {
                        Status: true, // اذا تبيه شغال خله مثل ماهو تبي تطفيه خليه false
                        Role: [], // الرتبة إلي تبيها تستخدم الأمر
                    }
                }
            }
        }
    }
}