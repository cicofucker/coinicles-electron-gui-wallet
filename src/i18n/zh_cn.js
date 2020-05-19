export default {
  buttons: {
    // All button text is uppercased in the gui
    advanced: "高級",
    all: "所有",
    back: "背部",
    browse: "瀏覽",
    cancel: "取消",
    change: "更改",
    check: "校驗",
    clear: "明確",
    close: "關",
    contacts: "聯繫方式",
    copyAddress: "複製地址",
    copySignature: "复制签名",
    createWallet: "创建钱包",
    decrypt: "解密",
    delete: "删除",
    edit: "编辑",
    export: "出口",
    generate: "生成",
    import: "进口",
    importWallet: "进口钱包| 进口钱包",
    lns: "COINICLES 名称服务",
    next: "下一个",
    openWallet: "开放式钱包",
    purchase: "采购",
    receive: "接收",
    registerServiceNode: "注册服务节点",
    rescan: "重新扫描",
    restoreWallet: "恢复钱包",
    save: "救",
    saveTxNotes: "救 TX 笔记",
    selectLocation: "选择位置",
    selectWalletFile: "选择钱包文件",
    send: "發送",
    sendCoins: "發送硬幣",
    serviceNode: "服務節點",
    settings: "設定",
    showQRCode: "顯示二維碼",
    showTxDetails: "救 TX 細節",
    stake: "賭注",
    sweepAll: "掃所有",
    unlock: "開鎖",
    update: "更新",
    viewOnExplorer: "在資源管理器上查看"
  },
  dialog: {
    // Generic buttons
    buttons: {
      ok: "好",
      cancel: "取消",
      open: "打開"
    },

    // Dialogs
    banPeer: {
      title: "禁止同行",
      peerDetailsTitle: "對等詳細信息",
      message: "輸入長度以秒為單位禁止同伴.\nDefault 3600 = 1 小時.",
      ok: "禁止同行"
    },
    copyAddress: {
      title: "複製地址",
      message: "沒有與此地址相關的付款ID.\n請確保分別複製付款ID."
    },
    copyPrivateKeys: {
      // Copy {seedWords/viewKey/spendKey}
      title: "複製 {type}",
      message: "將私鑰發送給誰時要小心，因為它們會控制您的資金.",
      seedWords: "種子詞",
      viewKey: "查看金鑰",
      spendKey: "支出金鑰"
    },
    deleteWallet: {
      title: "刪除錢包",
      message:
        "您確定要刪除錢包嗎？\n確保備份了私鑰。\n此過程不可逆！",
      ok: "刪除"
    },
    exit: {
      title: "出口",
      message: "你確定要離開？",
      ok: "出口"
    },
    keyImages: {
      title: "{type} 關鍵圖片",
      message: "你想要_____嗎 {type} 關鍵圖像？",
      export: "出口",
      import: "進口"
    },
    lnsUpdate: {
      title: "更新LNS記錄",
      message: "您要更新LNS記錄嗎？",
      ok: "更新"
    },
    noPassword: {
      title: "未設置密碼",
      message: "您確定要創建沒有密碼的錢包嗎？",
      ok: "是"
    },
    password: {
      title: "密碼",
      message: "輸入錢包密碼以繼續。"
    },
    purchase: {
      title: "購買名稱",
      message: "您要購買名稱嗎？",
      ok: "採購"
    },
    registerServiceNode: {
      title: "註冊服務節點",
      message: "您要註冊服務節點嗎？",
      ok: "寄存器"
    },
    rescan: {
      title: "重新掃描錢包",
      message: "警告：有關先前交易的一些信息\n如收件人的地址將丟失。",
      ok: "重新掃描"
    },
    restart: {
      title: "重新開始",
      message: "更改需要重新啟動。您想現在重新啟動嗎？",
      ok: "重新開始"
    },
    showPrivateKeys: {
      title: "顯示私鑰",
      message: "您要查看私鑰嗎？",
      ok: "顯示"
    },
    stake: {
      title: "賭注",
      message: "你想賭注嗎？",
      ok: "賭注"
    },
    sweepAll: {
      title: "掃一掃",
      message: "你想掃一掃嗎？",
      ok: "掃所有"
    },
    sweepAllWarning: {
      title: "清除所有警告",
      message:
        "您將通過向自己發送一筆交易來合併所有未使用的資金，您的錢包可能會暫時顯示余額為0，在10個區塊之後，您的資金將被解鎖並且您可以正常抵押。",
      ok: "繼續"
    },
    switchWallet: {
      title: "切換錢包",
      closeMessage: "您確定要關閉當前的錢包嗎？",
      restartMessage:
        "錢包RPC當前正在同步。 \n如果您想換錢包，那麼必須重新啟動應用程序。 \n您將失去同步進度，並且必須再次重新掃描區塊鏈。"
    },
    transactionDetails: {
      title: "交易明細",
      ok: "關"
    },
    transfer: {
      title: "傳遞",
      message: "您要發送交易嗎？",
      ok: "發送"
    },
    unlockConfirm: {
      title: "確認解鎖",
      ok: "開鎖"
    },
    unlockServiceNode: {
      title: "解鎖服務節點",
      confirmTitle: "確認解鎖",
      message: "是否要解鎖服務節點？",
      ok: "開鎖"
    },
    unlockServiceNodeWarning: {
      title: "解鎖服務節點警告",
      message:
        "解鎖節點中的部分股份也將對其他任何參與者都沒有利益，如果在共享節點中進行最大利益是讓運營商和其他參與者知道您正在利益。",
      ok: "繼續"
    }
  },
  fieldLabels: {
    // Field labels are also all uppercased
    address: "地址",
    amount: "量",
    backupOwner: "備份所有者",
    confirmPassword: "確認密碼",
    daemonLogLevel: "達蒙日誌級別",
    daemonP2pPort: "達蒙P2P端口",
    daemonZMQPort: "達蒙ZMQ PORT",
    dataStoragePath: "數據存儲路徑",
    decryptRecord: "解密記錄",
    filter: "過濾",
    filterTransactionType: "交易類型過濾器",
    internalWalletPort: "內部錢包端口",
    keyImages: {
      exportDirectory: "關鍵圖像導出目錄",
      importFile: "關鍵圖像導入文件"
    },
    limitDownloadRate: "極限下載率",
    limitUploadRate: "限制上傳率",
    localDaemonIP: "本地DAEMON IP",
    localDaemonPort: "本地大蒙港",
    maxIncomingPeers: "最大收入對等",
    maxOutgoingPeers: "最大外向同伴",
    message: "信息",
    mnemonicSeed: "MNEMONIC 種子",
    name: "NAME",
    newWalletName: "新錢包名稱",
    notes: "筆記",
    optional: "可選的",
    owner: "所有者",
    password: "密碼",
    paymentId: "付款號碼",
    priority: "優先",
    remoteNodeHost: "遠程節點主機",
    remoteNodePort: "遠程節點端口",
    restoreFromBlockHeight: "從區塊高度還原",
    restoreFromDate: "從日期還原",
    seedLanguage: "種子語言",
    serviceNodeCommand: "服務節點命令",
    serviceNodeKey: "服務節點鍵",
    sessionId: "會話ID",
    signature: "署名",
    transactionId: "交易編號",
    walletFile: "錢包檔案",
    walletLogLevel: "電子錢包日誌級別",
    walletName: "錢包名稱",
    walletRPCPort: "錢包RPC端口",
    walletStoragePath: "錢包存儲路徑",

    // These are specific labels which do not get uppercased
    confirmNewPassword: "確認新密碼",
    newPassword: "確認新密碼",
    oldPassword: "舊密碼",
    rescanFullBlockchain: "重新掃描整個區塊鏈",
    rescanSpentOutputs: "重新掃描花費的輸出",
    transactionNotes: "交易須知",
    chooseNetwork: "選擇一個網絡",
    network: "網絡"
  },
  footer: {
    ready: "準備",
    scanning: "掃描",
    status: "狀態",
    syncing: "正在同步",
    remote: "遠程",
    wallet: "錢包"
  },
  menuItems: {
    about: "關於",
    changePassword: "更改密碼",
    copyAddress: "複製地址",
    copyBackupOwner: "複製備份所有者",
    copyName: "複製名稱",
    copyOwner: "複製所有者",
    copyQR: "複製QR碼",
    copySeedWords: "複製種子詞",
    copySessionId: "複製會話ID",
    copySpendKey: "複製支出鍵",
    copyServiceNodeKey: "複製服務節點密鑰",
    copyTransactionId: "複製交易編號",
    copyViewKey: "複製視圖鍵",
    createNewWallet: "創建新錢包",
    deleteWallet: "刪除錢包",
    exit: "退出Coinicles GUI錢包",
    importOldGUIWallet: "從舊的GUI導入錢包",
    manageKeyImages: "管理關鍵圖片",
    openWallet: "打開錢包",
    rescanWallet: "重新掃描錢包",
    restoreWalletFile: "從文件還原錢包",
    restoreWalletSeed: "從種子恢復錢包",
    saveQR: "將QR碼保存到文件",
    sendToThisAddress: "發送到這個地址",
    settings: "設定值",
    showDetails: "顯示詳細資料",
    showPrivateKeys: "顯示私鑰",
    showQRCode: "顯示二維碼",
    switchWallet: "開關錢包",
    viewOnExplorer: "在資源管理器上查看"
  },
  notification: {
    positive: {
      addressCopied: "地址已復製到剪貼板",
      backupOwnerCopied: "備份所有者已復製到剪貼板",
      bannedPeer: "被禁止 {host} 直到 {time}",
      copied: "{item} 複製到剪貼板",
      decryptedLNSRecord: "已成功解密LNS記錄，用於 {name}",
      itemSaved: "{item} 保存到 {filename}",
      keyImages: {
        exported: "關鍵圖像導出到 {filename}",
        imported: "導入了關鍵圖像"
      },
      lnsRecordUpdated: "LNS記錄已成功更新",
      passwordUpdated: "密碼已更新",
      namePurchased: "名稱已成功購買",
      nameCopied: "名稱已復製到剪貼板",
      ownerCopied: "所有者已復製到剪貼板",
      qrCopied: "QR碼已復製到剪貼板",
      registerServiceNodeSuccess: "成功註冊服務節點",
      sendSuccess: "交易成功發送",
      sessionIdCopied: "會話ID已復製到剪貼板",
      signatureCopied: "簽名已復製到剪貼板",
      stakeSuccess: "成功放樣",
      transactionNotesSaved: "交易記錄已保存"
    },
    errors: {
      banningPeer: "禁止同行時出錯",
      cannotAccessRemoteNode: "無法訪問遠程節點，請嘗試其他遠程節點",
      changingPassword: "更改密碼時出錯",
      copyWalletFail: "無法複製錢包",
      copyingPrivateKeys: "複製私鑰時出錯",
      dataPathNotFound: "找不到數據存儲路徑",
      decryptLNSRecord: "無法為解密LNS記錄 {name}",
      differentNetType: "遠程節點正在使用其他網絡類型",
      enterSeedWords: "輸入種子詞",
      enterTransactionId: "輸入交易ID",
      enterTransactionProof: "輸入交易證明",
      enterWalletName: "輸入錢包名稱",
      enterName: "輸入名字",
      errorSavingItem: "保存錯誤 {item}",
      failedServiceNodeUnlock: "解鎖服務節點失敗",
      failedToSetLanguage: "無法設置語言： {lang}",
      failedWalletImport: "導入錢包失敗",
      failedWalletOpen: "無法打開錢包。請再試一遍。",
      failedWalletRead: "無法讀取錢包",
      internalError: "內部錯誤",
      invalidAddress: "地址無效",
      invalidAmount: "金額無效",
      invalidBackupOwner: "備份擁有者地址無效",
      invalidNameLength: "名稱必須介於1到64個字符之間",
      invalidNameFormat: "名稱只能包含字母數字，連字符和下劃線",
      invalidNameHypenNotAllowed: "名稱只能以字母數字或下劃線開頭或結尾",
      invalidOldPassword: "無效的舊密碼",
      invalidOwner: "所有者地址無效",
      invalidPassword: "無效的密碼",
      invalidPaymentId: "付款號碼無效",
      invalidPrivateViewKey: "無效的私人Viewkey",
      invalidPublicAddress: "無效的公共地址",
      invalidRestoreDate: "無效的還原日期",
      invalidRestoreHeight: "恢復高度無效",
      invalidSeedLength: "無效的種子字長",
      invalidServiceNodeCommand: "請輸入服務節點註冊命令",
      invalidServiceNodeKey: "服務節點密鑰無效",
      invalidSessionId: "會話ID無效",
      invalidWalletPath: "無效的錢包路徑",
      keyImages: {
        exporting: "導出關鍵圖像時出錯",
        reading: "讀取關鍵圖像時出錯",
        importing: "導入關鍵圖像時出錯"
      },
      negativeAmount: "金額不能為負",
      newPasswordNoMatch: "新密碼不匹配",
      newPasswordSame: "新密碼必須不同",
      notEnoughBalance: "解鎖餘額不足",
      passwordNoMatch: "密碼不匹配",
      remoteCannotBeReached: "無法訪問遠程守護程序",
      selectWalletFile: "選擇一個錢包文件",
      unknownError: "出現未知錯誤",
      walletAlreadyExists: "名稱已存在的錢包",
      walletPathNotFound: "找不到錢包數據存儲路徑",
      zeroAmount: "金額必須大於零"
    },
    warnings: {
      noKeyImageExport: "找不到要導出的關鍵圖像",
      usingLocalNode: "無法訪問遠程節點，僅切換到本地",
      usingRemoteNode: "使用遠程節點找不到coiniclesd"
    }
  },
  placeholders: {
    additionalNotes: "補充筆記",
    addressBookName: "屬於這個地址的名字",
    filterTx: "輸入ID，名稱，地址或金額",
    hexCharacters: "{count} 十六進製字符",
    lnsName: "通過Coinicles名稱服務購買的名稱",
    lnsBackupOwner: "備份擁有者的錢包地址",
    lnsDecryptName: "屬於您的LNS名稱",
    mnemonicSeed: "25（或24）字助記符種子",
    pasteTransactionId: "粘貼交易ID",
    pasteTransactionProof: "粘貼交易證明",
    proveOptionalMessage: "簽名所依據的可選消息",
    recipientWalletAddress: "收件人的錢包地址",
    selectAFile: "請選擇一個文件",
    sessionId: "鏈接到Coinicles名稱服務的會話ID",
    transactionNotes: "本地附加到交易的其他說明",
    walletName: "錢包的名字",
    walletPassword: "錢包的可選密碼"
  },
  strings: {
    addAddressBookEntry: "添加通訊錄條目",
    addressBookDetails: "地址簿詳細信息",
    addressBookIsEmpty: "地址簿為空",
    addresses: {
      myPrimaryAddress: "我的主要地址",
      myUnusedAddresses: "我未使用的地址",
      myUsedAddresses: "我使用的地址",
      primaryAddress: "首要地址",
      subAddress: "子地址",
      subAddressIndex: "指數 {index}"
    },
    advancedOptions: "高級選項",
    bannedPeers: {
      title: "被禁止的同伴（如果重新啟動錢包，則禁令將被清除）",
      bannedUntil: "禁止直到 {time}"
    },
    blockHeight: "高度",
    checkTransaction: {
      description:
        "通過提供交易ID，收件人地址，用於簽名的消息和簽名，驗證是否已將資金支付給某個地址。\n對於“支出證明”，您無需提供收件人地址。",
      infoTitles: {
        confirmations: "確認書",
        inPool: "在池塘里",
        validTransaction: "有效交易",
        received: "收到金額"
      },
      validTransaction: {
        no: "沒有",
        yes: "是"
      }
    },
    closing: "閉幕",
    connectingToBackend: "連接到後端",
    contribution: "貢獻",
    contributor: "貢獻者",
    daemon: {
      local: {
        title: "僅本地守護程序",
        description:
          "全面的安全性，錢包將下載完整的區塊鏈。在同步完成之前，您將無法進行交易。"
      },
      localRemote: {
        title: "本地+遠程守護程序",
        description:
          "使用此默認選項快速入門。電子錢包將下載完整的區塊鏈，但在同步時使用遠程節點。"
      },
      remote: {
        title: "僅遠程守護程序",
        description: "安全性較低，錢包將連接到遠程節點以進行所有交易。"
      }
    },
    destinationUnknown: "未知目的地",
    editAddressBookEntry: "編輯通訊錄條目",
    lnsDescription:
      "購買或更新會話ID的名稱。如果您購買名稱，則可能需要一兩分鐘的時間才能在列表中顯示該名稱。",
    loadingSettings: "正在載入設定",
    lokiBalance: "平衡",
    lokiUnlockedBalance: "解鎖餘額",
    lokiUnlockedShort: "已解鎖",
    me: "我",
    noTransactionsFound: "沒有發現交易",
    notes: "筆記",
    numberOfUnspentOutputs: "未使用的輸出數量",
    operator: "操作員",
    paymentID: "付款編號",
    peerList: "同行名單",
    priorityOptions: {
      automatic: "自動",
      slow: "慢",
      normal: "正常",
      fast: "快速",
      fastest: "最快的",
      blink: "眨"
    },
    proveTransactionDescription:
      "通過提供交易ID，收件人地址和可選消息，生成收款/付款證明。\n對於支出，您可以獲取“支出證明”以證明交易的作者身份。在這種情況下，您無需指定收件人地址。",
    readingWalletList: "閱讀錢包清單",
    recentIncomingTransactionsToAddress: "最近到此地址的收款交易",
    recentTransactionsWithAddress: "最近使用此地址進行的交易",
    rescanModalDescription: "選擇完全重新掃描或僅重新掃描用過的輸出。",
    saveSeedWarning: "請複制這些文件並將其保存在安全的位置！",
    saveToAddressBook: "保存到地址簿",
    seedWords: "種子詞",
    selectLanguage: "選擇語言",
    serviceNodeRegistrationDescription:
      '輸入 {registerCommand} 由守護程序生成的命令，該守護程序使用以下命令註冊成為服務節點 "{prepareCommand}" 命令',
    serviceNodeDetails: {
      contributors: "貢獻者",
      lastRewardBlockHeight: "最後獎勵塊的高度",
      lastUptimeProof: "上次正常運行時間證明",
      operatorFee: "運營費",
      registrationHeight: "登記高度",
      unlockHeight: "解鎖高度",
      serviceNodeKey: "服務節點密鑰",
      stakingRequirement: "放樣要求",
      totalContributed: "總貢獻"
    },
    spendKey: "支出金鑰",
    startingDaemon: "啟動守護程序",
    startingWallet: "起始錢包",
    switchToDateSelect: "切換至日期選擇",
    switchToHeightSelect: "切換到高度選擇",
    syncingDaemon: "同步守護程序",
    transactionID: "交易編號",
    transactionConfirmed: "已確認",
    transactions: {
      amount: "量",
      description: "{type} 交易",
      fee: "費用",
      paidBySender: "由發件人支付",
      received: "已收到",
      sent: "已發送",
      sentTo: "{type} 交易已發送至",
      timestamp: "時間戳記",
      types: {
        all: "所有",
        incoming: "傳入",
        outgoing: "外向",
        pending: "待定",
        pendingIncoming: "等待傳入",
        pendingOutgoing: "待傳出",
        miner: "礦工",
        serviceNode: "服務節點",
        governance: "管治",
        stake: "賭注",
        failed: "失敗的"
      }
    },
    unlockingAtHeight: "高空解鎖 {number}",
    unspentOutputs: "未花費的產出",
    userNotUsedAddress: "您尚未使用此地址",
    userUsedAddress: "您已使用此地址",
    viewKey: "查看金鑰",
    viewOnlyMode: "僅查看模式。請裝滿錢包以便發送硬幣。"
  },
  titles: {
    addressBook: "地址簿",
    addressDetails: "詳細地址",
    advanced: {
      checkTransaction: "檢查交易",
      prove: "證明"
    },
    changePassword: "更改密碼",
    configure: "配置",
    currentlyStakedNodes: "當前放樣的節點",
    lnsRecordDetails: "LNS記錄詳細信息",
    privateKeys: "私鑰",
    rescanWallet: "重新掃描錢包",
    serviceNode: {
      registration: "註冊",
      staking: "散客"
    },
    serviceNodeDetails: "服務節點詳細信息",
    settings: {
      title: "設定值",
      tabs: {
        general: "一般",
        language: "語言",
        peers: "同行"
      }
    },
    transactionDetails: "交易明細",
    transactions: "交易次數",
    wallet: {
      createNew: "創建新錢包",
      createdOrRestored: "錢包已創建/恢復",
      importFromFile: "從文件導入錢包",
      importFromLegacyGUI: "從舊版GUI導入錢包",
      importFromOldGUI: "從舊的GUI導入錢包",
      restoreFromSeed: "從種子恢復錢包",
      restoreViewOnly: "恢復僅查看錢包"
    },
    welcome: "歡迎",
    yourWallets: "您的錢包"
  }
};
