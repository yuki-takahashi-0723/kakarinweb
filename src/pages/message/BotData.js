 const BotData = {
    'init':{
        answers:[
            {content:'自分のためにイラストを書いて欲しい！',nextId:'offer'},
            {content:'twitterやってますか？',nextId:'twitter'},
            {content:'好きな食べ物はなんですか？',nextId:'like'},
            {content:'その他の質問',nextId:'contact'},   
        ],
        question:'こんにちは！ご用件はなんでしょうか？'
    },
    'offer':{
        answers:[
            {content:'電子データ',nextId:'dataIllust'},
            {content:'直筆イラスト',nextId:'illust'},
            {content:'その他',nextId:'otherIllust'},
        ],
        question:'どのような形で提供いたしましょう？'
    },
    'dataIllust':{
        answers:[
            {content:'問い合わせる',nextId:'contact'},
            {content:'最初の質問に戻る',nextId:'init'}, 
        ],
        question:'電子データのイラストですね？こちらからお問合せ願います！'
    },
    'illust':{
        answers:[
            {content:'問い合わせる',nextId:'contact'},
            {content:'最初の質問に戻る',nextId:'init'}, 
        ],
        question:'直筆のイラストですね？こちらからお問合せ願います！'
    },
    'otherIllust':{
        answers:[
            {content:'問い合わせる',nextId:'contact'},
            {content:'最初の質問に戻る',nextId:'init'}, 
        ],
        question:'その他の依頼ですね？こちらからお問合せ願います！'
    },
    
    'twitter':{
        answers:[
            {content:'フォローする',nextId:'https://twitter.com/KattaruiC'},
            {content:'最初の質問に戻る',nextId:'init'},
        ],
        question:'やってます！よければこちらからフォローお願いします！'
    },
    'like':{
        answers:[
            {content:'プリンをあげる！',nextId:'prin'},
            {content:'本当にプリンをあげる',nextId:'contact'},
            {content:'最初の質問に戻る',nextId:'init'},   
        ],
        question:'プリンです！プリンが食べたいです！'
    },
    'prin':{
        answers:[
            {content:'気持ちじゃなくて本当にあげたい！',nextId:'contact'},
            {content:'喜んでもらえて幸いです！',nextId:'init'},
        ],
        question:'プリンだー！わーい！ありがとうございます！お気持ちだけ受け取っておきます！'
    },
    // '':{
    //     answers:[
    //         {content:'',nextId:''},
    //         {content:'',nextId:''},
    //         {content:'',nextId:''},
    //         {content:'',nextId:''},   
    //     ],
    //     question:''
    // },
}

export default BotData