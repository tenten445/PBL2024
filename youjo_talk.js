var random = Math.floor(Math.random() * 16 + 1);

switch (random) {
    case 0: youjo_talk("きょうもがんばろ！"); break;
    case 1: youjo_talk("あしたははれるかな"); break;
    case 2: youjo_talk("ふふんふんふふん♪"); break;
    case 3: youjo_talk("えへへおにいちゃんだいすき！"); break;
    case 4: youjo_talk("ねえねえ、あそぼうよ！"); break;
    case 5: youjo_talk("おなかすいたなぁ…"); break;
    case 6: youjo_talk("おやつのじかんまだー？"); break;
    case 7: youjo_talk("うわぁ、きょうのそらきれい！"); break;
    case 8: youjo_talk("あれ？どこいっちゃったの？"); break;
    case 9: youjo_talk("ねむくなってきたぁ…"); break;
    case 10: youjo_talk("むむっ！これはなに！？"); break;
    case 11: youjo_talk("ろんりかいろってなに？"); break;

    case 12: youjo_talk("へへーんわたしすごいでしょ！"); break;
    case 13: youjo_talk("ねぇねぇ、おはなしきかせて！"); break;
    case 14: youjo_talk("きょうはなんのひかな？"); break;
    case 15: youjo_talk("おえかきしよーっと！"); break;
    case 16: youjo_talk("たすくはおわった？"); break;

}




function youjo_talk(talk) {
    document.getElementById("mess").textContent = talk;
}