export default {
  eth: `${process.env.ENTRY}:eth:privateKey`,
  bnb: `${process.env.ENTRY}:bnb:privateKey`,
  matic: `${process.env.ENTRY}:matic:privateKey`,
  arbitrum: `${process.env.ENTRY}:arbitrum:privateKey`,
  aureth: `${process.env.ENTRY}:aureth:privateKey`,
  xdai: `${process.env.ENTRY}:xdai:privateKey`,
  ftm: `${process.env.ENTRY}:ftm:privateKey`,
  avax: `${process.env.ENTRY}:avax:privateKey`,
  movr: `${process.env.ENTRY}:movr:privateKey`,
  one: `${process.env.ENTRY}:one:privateKey`,
  ame: `${process.env.ENTRY}:ame:privateKey`,
  phi_v1: `${process.env.ENTRY}:phi:privateKey`,
  phi: `${process.env.ENTRY}:phi:privateKey`, // Use old blockchain private key
  fkw: `${process.env.ENTRY}:fkw:privateKey`,
  btc: `${process.env.ENTRY}:btc:privateKey`,
  ghost: `${process.env.ENTRY}:ghost:privateKey`,
  next: `${process.env.ENTRY}:next:privateKey`,
  twentywords: `${process.env.ENTRY}:twentywords`,
  btcMultisig: `${process.env.ENTRY}:btcMultisig:privateKey`,
  btcMultisigOtherOwnerKey: `${process.env.ENTRY}:btcMultisig:otherOwnerKey`,
  btcSmsMnemonicKey: `${process.env.ENTRY}:btcSmsMnemonicKey`,
  btcSmsMnemonicKeyGenerated: `${process.env.ENTRY}:btcSmsMnemonicKeyGenerated`,

  btcPinMnemonicKey: `${process.env.ENTRY}:btcPinMnemonicKey`,
  // Shamir's Secret-Sharing for Mnemonic Codes
  shamirsMnemonics: `${process.env.ENTRY}:shamirsMnemonics`,
  shamirsSecrets: `${process.env.ENTRY}:shamirsSecrets`,
}
