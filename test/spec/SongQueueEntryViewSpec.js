describe('SongQueueEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new SongQueueEntryView({model: model});
    view.render();
  });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
  
  it('dequeues clicked songs', function() {
    sinon.spy(SongModel.prototype, 'dequeue');

    view.$el.children().first().click();
    expect(model.dequeue).to.have.been.called;

    SongModel.prototype.dequeue.restore();
  });

});
