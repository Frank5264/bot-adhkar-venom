


module.exports = ai = async(client, message) => {

    try {
        const txt = message.body.toLowerCase()
        const from = message.from;
        const id = message.id;


   if ((txt.includes('كيفك')) || (txt.includes('كيف حالك')) || (txt.includes('أخباركم')) || (txt.includes('أخبارك')) || (txt.includes('كيفكم'))) {  
    await client.reply(from, "بخير الحمدالله", id);
}

else if ((txt.includes('من معي')) || (txt.includes('من انت')) || (txt.includes('مين معي'))) {  
    await client.reply(from, "معك بوت أذكار 🤖", id);
}

else if ((txt.includes('اتعرف على بنات')) || (txt.includes('أتعرف على بنات'))){

    await client.reply(from, '{يَا أَيُّهَا الَّذِينَ آَمَنُوا لَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ وَمَنْ يَتَّبِعْ خُطُوَاتِ الشَّيْطَانِ فَإِنَّهُ يَأْمُرُ بِالْفَحْشَاءِ وَالْمُنْكَرِ} [النور: 21]', id)
}

else if (txt.includes('سالب')){

    await client.reply(from, 'وَلُوطًا إِذْ قَالَ لِقَوْمِهِ أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُمْ بِهَا مِنْ أَحَدٍ مِنَ الْعَالَمِينَ (80) إِنَّكُمْ لَتَأْتُونَ الرِّجَالَ شَهْوَةً مِنْ دُونِ النِّسَاءِ بَلْ أَنْتُمْ قَوْمٌ مُسْرِفُونَ (81) وَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَنْ قَالُوا أَخْرِجُوهُمْ مِنْ قَرْيَتِكُمْ إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ (82) فَأَنْجَيْنَاهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ كَانَتْ مِنَ الْغَابِرِينَ (83) وَأَمْطَرْنَا عَلَيْهِمْ مَطَرًا فَانْظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُجْرِمِينَ (84) [الأعراف: 80-84]', id)
}

else if (txt.includes('سكس')) {

    await client.sendImage(from , 'http://bot.rn0x.com/bot/lib/img/ai/ai1.jpeg', 'photo.jpeg', '{قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ ذَلِكَ أَزْكَى لَهُمْ إِنَّ اللَّهَ خَبِيرٌ بِمَا يَصْنَعُونَ} [النور: 30].')
}

else if ((txt.includes('بوت ي '))  || (txt.includes('بوت يا'))){
    
    await client.reply(from, 'احترم نفسك', id);
}

else if ((txt.includes('صلي على'))  || (txt.includes('صلو على'))){
    
    await client.reply(from, 'اللهم صلي وسلم على نبينا محمد', id);
}

else if (txt.includes('صباح الخير')){
    
    await client.reply(from, 'صباح النور', id);
}

else if (txt.includes('مساء الخير')){
    
    await client.reply(from, 'مساء النور', id);
}

else if (txt.includes('سلام عليكم')){
    
    await client.reply(from, 'وعليكم السلام ورحمة الله وبركاته', id);
}

else if ((txt.includes('انت بوت')) || (txt.includes('أنت بوت'))){
    
    await client.reply(from, 'نعم انا بوت', id);
}

else if ((txt.includes('انت حقيقي')) || (txt.includes('أنت حقيقي')) || (txt.includes('انت انسان')) || (txt.includes('أنت انسان'))){
    
    await client.reply(from, 'انا روبوت أقوم بمهام معينة لاكن يمكن لصاحب الروبوت بالأطلاع على الرسائل', id);
}

else if (txt.includes('تعرف تسوي')){
    
    await client.reply(from, 'لا ما أعرف', id);
} 

else if ((txt.includes('انا وحيد')) || (txt.includes('أنا وحيد'))) {

    await client.sendImage(from, 'http://bot.rn0x.com/bot/lib/img/ai/ai2.jpg', 'ai2.jpg', 'كلما أحسست أنك وحيد تذكر(ونحن أقرب إليه من حبل الوريد)')
}


  
      
} catch(error){
 }
  
  
  }