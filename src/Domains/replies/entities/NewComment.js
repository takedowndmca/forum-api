class NewComment {
  constructor(ownerId, threadId, payload) {
    this._verifyPayload(payload);
    const { content } = payload;

    this.content = content;
    this.threadId = threadId;
    this.ownerId = ownerId;
  }

  _verifyPayload({ content }) {
    if (!content) {
      throw new Error('NEW_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof content !== 'string') {
      throw new Error('NEW_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = NewComment;
