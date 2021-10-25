initSidebarItems({"constant":[["BABE_GENESIS_EPOCH_CONFIG","The BABE epoch configuration at genesis."],["VERSION","Runtime version (Polkadot)."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["BalancesCall","Contains one variant per dispatchable that can be called by an extrinsic."],["Call",""],["EPMCall","Contains one variant per dispatchable that can be called by an extrinsic."],["Event",""],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."],["StakerStatus","Indicates the initial status of the staker."],["TimestampCall","Contains one variant per dispatchable that can be called by an extrinsic."]],"fn":[["native_version","Native version."]],"mod":[["api",""],["constants","Constant values used within the runtime."]],"struct":[["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["BagThresholds",""],["BaseFilter",""],["BasicDeposit",""],["BondingDuration",""],["BountyCuratorDeposit",""],["BountyDepositBase",""],["BountyDepositPayoutDelay",""],["BountyUpdatePeriod",""],["BountyValueMinimum",""],["Burn",""],["CandidacyBond",""],["CooloffPeriod",""],["CouncilMaxMembers",""],["CouncilMaxProposals",""],["CouncilMotionDuration",""],["CrowdloanId",""],["DataDepositPerByte",""],["DepositBase",""],["DepositFactor",""],["DesiredMembers","13 members initially, to be increased to 23 eventually."],["DesiredRunnersUp",""],["EnactmentPeriod",""],["EndingPeriod",""],["EpochDuration",""],["ExistentialDeposit",""],["ExpectedBlockTime",""],["FastTrackVotingPeriod",""],["FieldDeposit",""],["FirstMessageFactorPercent",""],["GenesisConfig",""],["ImOnlineUnsignedPriority",""],["IndexDeposit",""],["InstantAllowed",""],["LaunchPeriod",""],["LeaseOffset",""],["LeasePeriod",""],["MaxAdditionalFields",""],["MaxApprovals",""],["MaxAuthorities",""],["MaxKeys",""],["MaxLocks",""],["MaxMemoLength",""],["MaxNominatorRewardedPerValidator",""],["MaxPeerDataEncodingSize",""],["MaxPeerInHeartbeats",""],["MaxPending",""],["MaxProposals",""],["MaxProxies",""],["MaxRegistrars",""],["MaxReserves",""],["MaxRetries",""],["MaxScheduledPerBlock",""],["MaxSignatories",""],["MaxSubAccounts",""],["MaxVotes",""],["MaximumReasonLength",""],["MaximumSchedulerWeight",""],["MigrateTipsPalletPrefix","Migrate pallet-tips from `Treasury` to the new pallet prefix `Tips`"],["MinContribution",""],["MinVestedTransfer",""],["MinimumDeposit",""],["MinimumPeriod",""],["NposCompactSolution16",""],["NposSolutionPriority",""],["OffchainRepeat",""],["OffendingValidatorsThreshold",""],["OperationalFeeMultiplier","This value increases the priority of `Operational` transactions by adding a “virtual tip” that’s equal to the `OperationalFeeMultiplier * final_fee`."],["Origin","The runtime origin type represanting the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["ParaDataByteDeposit",""],["ParaDeposit",""],["ParathreadDeposit",""],["PhragmenElectionPalletId",""],["Prefix",""],["PreimageByteDeposit",""],["ProposalBond",""],["ProposalBondMinimum",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["RemoveKeysLimit",""],["ReportLongevity",""],["RewardCurve",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["SS58Prefix",""],["SampleLength",""],["SessionKeys",""],["SessionsPerEra",""],["SetInitialHostConfiguration","Set the initial host configuration for Polkadot."],["SignedDepositBase",""],["SignedDepositByte",""],["SignedMaxSubmissions",""],["SignedPhase",""],["SignedRewardBase",""],["SlashDeferDuration",""],["SolutionImprovementThreshold",""],["SpendPeriod",""],["StakingBagsListMigrationV8",""],["SubAccountDeposit",""],["SubmissionDeposit",""],["TechnicalMaxMembers",""],["TechnicalMaxProposals",""],["TechnicalMotionDuration",""],["TermDuration","Weekly council elections; scaling up to monthly eventually."],["TipCountdown",""],["TipFindersFee",""],["TipReportDepositBase",""],["TransactionByteFee",""],["TreasuryPalletId",""],["UncleGenerations",""],["UnsignedPhase",""],["Version",""],["VoterSnapshotPerBlock","Whilst `UseNominatorsAndUpdateBagsList` or `UseNominatorsMap` is in use, this can still be a very large value. Once the `BagsList` is in full motion, staking might open its door to many more nominators, and this value should instead be what is a “safe” number (e.g. 22500)."],["VotingBondBase",""],["VotingBondFactor",""],["VotingPeriod",""]],"trait":[["BuildStorage","Complex storage builder stuff."]],"type":[["Address","The address format for describing accounts."],["AllModules","All modules included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllModulesWithSystem","All modules included in the runtime as a nested tuple of types."],["AllPallets","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["Auctions",""],["AuthorityDiscovery",""],["AuthorityDiscoveryConfig",""],["Authorship",""],["Babe",""],["BabeConfig",""],["BagsList",""],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["BlockId","`BlockId` type as expected by this runtime."],["Bounties",""],["Claims",""],["ClaimsConfig",""],["Configuration",""],["ConfigurationConfig",""],["Council",""],["CouncilCollective",""],["CouncilConfig",""],["Crowdloan",""],["Democracy",""],["DemocracyConfig",""],["Dmp",""],["ElectionProviderMultiPhase",""],["Executive","Executive: handles dispatch to the various modules."],["Grandpa",""],["GrandpaConfig",""],["Header","Block header type as expected by this runtime."],["Historical",""],["Hrmp",""],["Identity",""],["ImOnline",""],["ImOnlineConfig",""],["Indices",""],["IndicesConfig",""],["Initializer",""],["Multisig",""],["Offences",""],["ParaInclusion",""],["ParaInherent",""],["ParaScheduler",""],["ParaSessionInfo",""],["ParachainsOrigin",""],["Paras",""],["ParasConfig",""],["ParasShared",""],["PhragmenElection",""],["PhragmenElectionConfig",""],["Proxy",""],["Registrar",""],["Scheduler",""],["Session",""],["SessionConfig",""],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The `SignedExtension` to the basic transaction logic."],["SignedPayload","The payload being signed in transactions."],["Slots",""],["Staking",""],["StakingConfig",""],["System",""],["SystemConfig",""],["TechnicalCollective",""],["TechnicalCommittee",""],["TechnicalCommitteeConfig",""],["TechnicalMembership",""],["TechnicalMembershipConfig",""],["Timestamp",""],["Tips",""],["TransactionPayment",""],["Treasury",""],["TreasuryConfig",""],["Ump",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Utility",""],["Vesting",""],["VestingConfig",""]]});